import { useEffect, useState } from 'react'
import './App.css'
import { ToDoProvider } from './context/ToDoContext'
import  ToDoForm from './components/ToDoForm'
import  ToDoItem  from './components/ToDoItem'

function App() {
  const [todos, setTodos] = useState([]);

   const addTodo = (todoObj) => {
  setTodos((prev) => [
    { id: Date.now(), ...todoObj },   // spread the object
    ...prev,
  ]);
};
  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((t) => t.id === id ? todo : t));
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  }

  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((t) => t.id === id ? {...t, completed: !t.completed} : t));
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos") )
    if(todos && todos.length > 0) {
      setTodos(todos)
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <ToDoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-3xl font-bold text-center mb-6">📝 Manage Your Todos</h1>
                      <div className="mb-6">
                        <ToDoForm />
                      </div>
                      <div className="flex flex-col gap-3">
                        {todos.length > 0 ? (
                          todos.map((todo) => (
                          <ToDoItem key={todo.id} todo={todo} />
                         ))
                       ) : (
                          <p className="text-center text-gray-400">No todos yet. Add one!</p>
                         )}
                     </div>
                   </div>
            </div>
     </ToDoProvider>
    
  )
}

export default App
