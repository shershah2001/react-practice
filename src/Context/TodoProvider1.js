import React, { createContext, useReducer } from 'react';

export const TodoContext = createContext()
const initialState = {
    todo: [],
    updateId: null

}
const reduce = (state, action) => {
    switch (action.type) {
        case "add":
            return {
                ...state,
                todo: [...state.todo, action.payload]
            };

        case "edit":
            return {
                ...state,
                todo: state.todo.map((ele) => {
                   return   ele.id === action.payload.id ?
                        {
                            username: action.payload.username,
                            email: action.payload.email
                        }
                        : ele
                      
                })
            };
        case "remove":
            return {
                ...state,
                todo: state.todo.filter((ele) => ele.id !== action.payload.eleId)
            };
        case "update":

            return {
                ...state,
                updateId: action.payload
            };
        default:
            return state;
    }

}
const TodoProvider1 = ({ children }) => {
    const [state, dispatch] = useReducer(reduce, initialState)
    // console.log(state)
    return (
        <>
            <TodoContext.Provider value={{ state, dispatch }}>
                {children}
            </TodoContext.Provider>
        </>
    )
}

export default TodoProvider1;
