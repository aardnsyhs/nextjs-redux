"use client";

import { useState } from "react";
import { Todo } from "@/types";
import { useAppDispatch } from "@/lib/store";
import { toggleTodo, editTodo, deleteTodo } from "@/lib/store/todoSlice";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Trash2, Pencil, Check, X } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function TodoItem({ todo }: { todo: Todo }) {
  const dispatch = useAppDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleSave = () => {
    if (newText.trim()) {
      dispatch(editTodo({ id: todo.id, newText }));
      setIsEditing(false);
    }
  };

  return (
    <li className="flex items-center justify-between bg-muted px-3 py-2 rounded-md">
      <div className="flex items-center gap-2 w-full">
        <Checkbox
          checked={todo.completed}
          onCheckedChange={() => dispatch(toggleTodo(todo.id))}
        />
        {isEditing ? (
          <Input
            className="text-sm w-full"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSave();
              if (e.key === "Escape") setIsEditing(false);
            }}
            autoFocus
          />
        ) : (
          <span
            className={`text-sm flex-1 ${
              todo.completed ? "line-through text-muted-foreground" : ""
            }`}
          >
            {todo.text}
          </span>
        )}
      </div>
      <div className="flex items-center gap-1">
        {isEditing ? (
          <>
            <Button size="icon" variant="ghost" onClick={handleSave}>
              <Check className="h-4 w-4" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              onClick={() => setIsEditing(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </>
        ) : (
          <Button
            size="icon"
            variant="ghost"
            onClick={() => setIsEditing(true)}
          >
            <Pencil className="h-4 w-4" />
          </Button>
        )}
        <Button
          size="icon"
          variant="ghost"
          onClick={() => dispatch(deleteTodo(todo.id))}
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>
    </li>
  );
}
