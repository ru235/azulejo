#!/usr/bin/env bash
# Deploy Azulejo on a fresh VPS: Docker + the app container + Caddy (auto HTTPS).
# Run as root on the server:  bash deploy.sh
set -euo pipefail

DOMAIN="azulejo.convertmedia.ru"
cd "$(dirname "$0")"

echo "== Azulejo deploy -> https://${DOMAIN} =="

if ! command -v docker >/dev/null 2>&1; then
  echo "[1/5] installing Docker..."
  curl -fsSL https://get.docker.com | sh
  systemctl enable --now docker
else
  echo "[1/5] Docker present: $(docker --version)"
fi

if ! docker compose version >/dev/null 2>&1; then
  echo "[2/5] installing the compose plugin..."
  if command -v apt-get >/dev/null 2>&1; then
    apt-get update -qq && apt-get install -y docker-compose-plugin
  else
    echo "compose plugin missing and apt-get unavailable — install it manually" >&2
    exit 1
  fi
else
  echo "[2/5] compose present: $(docker compose version --short)"
fi

# Caddy needs 80 (ACME HTTP challenge + redirect) and 443 reachable.
if command -v ufw >/dev/null 2>&1 && ufw status | grep -q "Status: active"; then
  echo "[3/5] opening 80/443 in ufw..."
  ufw allow 80/tcp >/dev/null
  ufw allow 443/tcp >/dev/null
  ufw allow 443/udp >/dev/null
else
  echo "[3/5] ufw inactive or absent — check the provider's firewall allows 80/443"
fi

echo "[4/5] building and starting..."
docker compose up -d --build

echo "[5/5] waiting for the app to answer..."
for _ in $(seq 1 30); do
  if docker compose exec -T app node -e "fetch('http://127.0.0.1:3000/').then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))" 2>/dev/null; then
    echo "app is up"
    break
  fi
  sleep 2
done

docker compose ps
echo
echo "--- app log (last 30) ---";   docker compose logs app   --tail 30 || true
echo
echo "--- caddy log (last 30) ---"; docker compose logs caddy --tail 30 || true
echo
echo "Done. Open https://${DOMAIN}"
echo "If the certificate did not issue: confirm the A record ${DOMAIN} -> this server's IP,"
echo "then re-check with: docker compose logs caddy --tail 100"
