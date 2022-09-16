import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Header from "./components/Header";
import { TodoProvider } from "./contexts/TodoContext";

function App() {
  return (
    <TodoProvider>
      <Header />
      <TodoForm />
      <TodoList />
    </TodoProvider>
  );
}

export default App;
