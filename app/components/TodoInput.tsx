"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useAppDispatch } from "@/lib/store";
import { addTodo } from "@/lib/store/todoSlice";

export default function TodoInput() {
  const [task, setTask] = useState("");
  const dispatch = useAppDispatch();

  const handleAdd = () => {
    if (task.trim() !== "") {
      dispatch(addTodo(task));
      setTask("");
    }
  };

  return (
    <div className="flex gap-2">
      <Input
        placeholder="Tambahkan todo..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <Button onClick={handleAdd}>Tambah</Button>
    </div>
  );
}
