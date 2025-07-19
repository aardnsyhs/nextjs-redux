// components/TodoList.tsx
"use client";

import { useAppSelector } from "@/lib/store";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const todos = useAppSelector((state) => state.todo.todos);
  const filter = useAppSelector((state) => state.todo.filter);

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "done") return todo.completed;
    return true;
  });

  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle>Daftar Todo</CardTitle>
      </CardHeader>
      <CardContent>
        {filteredTodos.length === 0 ? (
          <p className="text-sm text-muted-foreground">Belum ada todo.</p>
        ) : (
          <ul className="space-y-2">
            {filteredTodos.map((todo) => (
              <TodoItem key={todo.id} todo={todo} />
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
}
