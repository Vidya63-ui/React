import React,{useState} from 'react'
import { useToDoContext } from '../context/ToDoContext';

function ToDoItem({ todo }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);

  const { updateTodo, deleteTodo, toggleComplete } = useToDoContext();

  const editTodo = () => {
    console.log("Editing todo:", todo, todo.id, todoMsg);
    updateTodo(todo.id, { ...todo, todo: todoMsg });
    setIsTodoEditable(false);
  };

  return (
    <div
      className={`flex items-center justify-between gap-2 border rounded-lg px-3 py-2 shadow-md transition
        ${todo.completed ? "bg-green-100" : "bg-purple-100"}`}
    >
      {/* Checkbox */}
      <input
        type="checkbox"
        className="cursor-pointer h-5 w-5 accent-green-600"
        checked={todo.completed}
        onChange={() => toggleComplete(todo.id)}
      />

      {/* Editable text */}
      <input
        type="text"
        className={`flex-1 bg-transparent outline-none px-2 rounded-md ${
          todo.completed ? "line-through text-gray-500" : "text-black"
        } ${isTodoEditable ? "border border-gray-300" : ""}`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />

      {/* Edit / Save Button */}
      <button
        onClick={() => {
          if (todo.completed) return;
          if (isTodoEditable) {
            editTodo();
          } else setIsTodoEditable(true);
        }}
        disabled={todo.completed}
        className="p-2 rounded-full hover:bg-gray-200 transition disabled:opacity-40"
      >
        {isTodoEditable ? "💾" : "✏️"}
      </button>

      {/* Delete Button */}
      <button
        onClick={() => deleteTodo(todo.id)}
        className="p-2 rounded-full hover:bg-red-200 transition"
      >
        🗑️
      </button>
    </div>
  );
}

export default ToDoItem;