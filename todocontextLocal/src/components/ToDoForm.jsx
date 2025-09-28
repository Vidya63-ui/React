import React,{useState,useContext} from 'react'
import { ToDoContext, useToDoContext } from '../context/ToDoContext'

function ToDoForm() {

    const [todo, setTodo] = useState("");
  const { addTodo } = useToDoContext();

  const add = (e) => {
      e.preventDefault()

      if (!todo) return
      console.log("Adding todo:", todo);
      addTodo({ todo : todo, completed: false})
      setTodo("")
    }
  return (
    <form onSubmit={add} className="flex shadow-lg rounded-lg overflow-hidden">
      <input
        type="text"
        placeholder="✍️ Write your todo..."
        className="w-full px-4 py-2 text-black outline-none focus:ring-2 focus:ring-green-400"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        type="submit"
        className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 transition"
      >
        ➕ Add
      </button>
    </form>
  );
   
}

export default ToDoForm