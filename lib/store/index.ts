import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";
import { useSelector, TypedUseSelectorHook, useDispatch } from "react-redux";
import { FilterType, Todo } from "@/types";

const loadFromLocalStorage = (): Todo[] => {
  if (typeof window === "undefined") return [];
  try {
    const todos = localStorage.getItem("todos");
    return todos ? JSON.parse(todos) : [];
  } catch {
    return [];
  }
};

const saveToLocalStorage = (todos: Todo[]) => {
  try {
    localStorage.setItem("todos", JSON.stringify(todos));
  } catch (e) {
    console.error("Failed to save todos:", e);
  }
};

const preloadedState = {
  todo: {
    todos: loadFromLocalStorage(),
    filter: "all" as FilterType,
  },
};

export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
  preloadedState,
});

store.subscribe(() => {
  const state = store.getState();
  saveToLocalStorage(state.todo.todos);
});

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
