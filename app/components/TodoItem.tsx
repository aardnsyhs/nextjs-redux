"use client";

import { Todo } from "@/types";
import { useAppDispatch } from "@/lib/store";
import { toggleTodo, deleteTodo } from "@/lib/store/todoSlice";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

export default function TodoItem({ todo }: { todo: Todo }) {
  const dispatch = useAppDispatch();

  return (
    <li className="flex items-center justify-between bg-muted px-3 py-2 rounded-md">
      <div className="flex items-center gap-2">
        <Checkbox
          checked={todo.completed}
          onCheckedChange={() => dispatch(toggleTodo(todo.id))}
        />
        <span
          className={`text-sm ${
            todo.completed ? "line-through text-muted-foreground" : ""
          }`}
        >
          {todo.text}
        </span>
      </div>
      <Button
        size="icon"
        variant="ghost"
        onClick={() => dispatch(deleteTodo(todo.id))}
      >
        <Trash2 className="h-4 w-4" />
      </Button>
    </li>
  );
}
