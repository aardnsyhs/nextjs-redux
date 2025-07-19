"use client";

import { useAppSelector } from "@/lib/store";
import { Badge } from "@/components/ui/badge";

export default function StatsBar() {
  const todos = useAppSelector((state) => state.todo.todos);

  const total = todos.length;
  const doneCount = todos.filter((todo) => todo.completed).length;
  const activeCount = total - doneCount;

  return (
    <div className="flex items-center gap-3 text-sm text-muted-foreground">
      <Badge variant="secondary">Total: {total}</Badge>
      <Badge variant="outline">Selesai: {doneCount}</Badge>
      <Badge variant="outline">Aktif: {activeCount}</Badge>
    </div>
  );
}
