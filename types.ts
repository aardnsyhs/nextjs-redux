export type Todo = {
  id: string;
  text: string;
  completed: boolean;
};

export type FilterType = "all" | "active" | "done";
