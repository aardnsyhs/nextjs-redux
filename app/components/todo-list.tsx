"use client";

import { useAppSelector } from "@/lib/store";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TodoList() {
  const todos = useAppSelector((state) => state.todo.todos);

  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle>Daftar Todo</CardTitle>
      </CardHeader>
      <CardContent>
        {todos.length === 0 ? (
          <p className="text-sm text-muted-foreground">Belum ada todo.</p>
        ) : (
          <ul className="list-disc pl-4 space-y-1">
            {todos.map((todo) => (
              <li key={todo.id}>{todo.text}</li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
}
