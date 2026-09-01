import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useProgress, type LessonId } from "@/lib/store";

export function MarkDone({ id }: { id: LessonId }) {
  const done = useProgress((s) => s.completed.includes(id));
  const mark = useProgress((s) => s.markComplete);

  if (done) {
    return (
      <p className="flex items-center gap-2 text-sm font-medium text-good">
        <Check className="size-4" strokeWidth={2.2} />
        Раздел отмечен
      </p>
    );
  }

  return (
    <Button variant="secondary" onClick={() => mark(id)}>
      Отметить как изученное
    </Button>
  );
}
