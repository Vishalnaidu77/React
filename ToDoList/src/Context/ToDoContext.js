import { createContext, useContext } from "react";

export const ToDoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "Add Functionality",
            completed: false
        }  
    ],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    dltTodo: (id) => {},
    toggleComplete: (id) => {}
})

export const useTodo = () => {
    return useContext(ToDoContext)
}

export const ToDoProvider = ToDoContext.Provider