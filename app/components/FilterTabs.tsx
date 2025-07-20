"use client";

import { useAppDispatch, useAppSelector } from "@/lib/store";
import { setFilter, FilterType } from "@/lib/store/todoSlice";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function FilterTabs() {
  const dispatch = useAppDispatch();
  const currentFilter = useAppSelector((state) => state.todo.filter);

  const filters: FilterType[] = ["all", "active", "done"];

  const handleChange = (value: string) => {
    dispatch(setFilter(value as FilterType));
  };

  return (
    <Tabs value={currentFilter} onValueChange={handleChange} className="w-full">
      <TabsList>
        {filters.map((filter) => (
          <TabsTrigger key={filter} value={filter}>
            {filter.toUpperCase()}
          </TabsTrigger>
        ))}
      </TabsList>
      {filters.map((filter) => (
        <TabsContent key={filter} value={filter}></TabsContent>
      ))}
    </Tabs>
  );
}
