import { createContext, useContext } from "react";


export const ToDoContext = createContext({
    todos : [{
        id: 1,
        todo : "ToDo Massage",
        completed : false
    }],
    addTodo : (todo) =>{},
    updateTodo : (id, todo) => {},
    deleteTodo : (id) => {},
    toggleComplete : (id) => {}
});
export const useToDoContext = () => useContext(ToDoContext);
export const ToDoProvider = ToDoContext.Provider;