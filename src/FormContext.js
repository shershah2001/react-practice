import React, { useContext, useEffect, useState } from 'react';
import { TodoContext } from './Context/TodoProvider';

const FormContext = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const { state, dispatch } = useContext(TodoContext)
    const onSubmitHandler = () => {
        if (state.updateId !== null) {
            dispatch({
                type: "edit",
                payload: {
                    title,
                    description,
                    updateId: state.updateId
                }
            })
        } else {
            dispatch({
                type: "add",
                payload: {
                    title,
                    description,
                    id: new Date().getTime().toString()
                }
            })
        }
        setTitle("");
        setDescription("")
    }
    useEffect(() => {
        if (state.updateId !== null) {
            const todo = state.todos.find((todo) => todo.id === state.updateId);
            if (todo) {
                setTitle(todo.title)
                setDescription(todo.description)
            }
        }
    }, [state.updateId])
    return (
        <div style={{ display: 'flex', flexDirection: "column", gap: 10, width: "250px", margin: "0 auto", marginTop: '5rem' }}>
            <input type="text"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                placeholder="Please enter text"
            />
            <input
                type="text"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                placeholder="Please enter description"
            />
            <button onClick={() => onSubmitHandler(state.updateId)}>Submit</button>
        </div>
    )
}

export default FormContext;
