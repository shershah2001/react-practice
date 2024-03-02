import React, { createContext, useReducer } from "react";

export const TodoContext = createContext();
const reducer = (state, action) => {
    switch (action.type) {
        case "add":
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        case "edit":
            return {
                ...state,
                updateId: null,
                todos: state.todos.map((todo) => {
                    return todo.id === action.payload.updateId ?
                        {
                            title: action.payload.title,
                            description: action.payload.description
                        }
                        : todo
                }
                )
            }
        case "delete":
            return {
                ...state,
                todos: state.todos.filter((todos)=> todos.id !== action.payload.updateId)
            }
        case "updateId":
            return {
                ...state,
                updateId: action.payload
            }
        default:
            return state;
    }
}

const TodoProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, { todos: [], updateId: null })
    console.log(state)
    return (
        <TodoContext.Provider value={{ state, dispatch }}>
            {children}
        </TodoContext.Provider>
    )
}
export default TodoProvider;