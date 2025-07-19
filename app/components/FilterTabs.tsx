"use client";

import { useAppDispatch, useAppSelector } from "@/lib/store";
import { setFilter, FilterType } from "@/lib/store/todoSlice";
import { Button } from "@/components/ui/button";

export default function FilterTabs() {
  const dispatch = useAppDispatch();
  const currentFilter = useAppSelector((state) => state.todo.filter);

  const filters: FilterType[] = ["all", "active", "done"];

  return (
    <div className="flex gap-2">
      {filters.map((filter) => (
        <Button
          key={filter}
          variant={filter === currentFilter ? "default" : "outline"}
          onClick={() => dispatch(setFilter(filter))}
        >
          {filter.toUpperCase()}
        </Button>
      ))}
    </div>
  );
}
