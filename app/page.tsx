import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import FilterTabs from "./components/FilterTabs";
import StatsBar from "./components/StatsBar";

export default function Page() {
  return (
    <main className="max-w-xl mx-auto py-10 px-4 space-y-6">
      <h1 className="text-3xl font-bold">📋 Todo List</h1>
      <TodoInput />
      <FilterTabs />
      <TodoList />
      <StatsBar />
    </main>
  );
}
