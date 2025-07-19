import TodoInput from "./components/todo-input";
import TodoList from "./components/todo-list";

export default function Home() {
  return (
    <main className="max-w-xl mx-auto py-10 px-4 space-y-6">
      <h1 className="text-2xl font-bold">Todo List</h1>
      <TodoInput />
      <TodoList />
    </main>
  );
}
