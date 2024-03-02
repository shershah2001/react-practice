import React, { useContext, useEffect, useState } from 'react'
import { TodoContext } from './Context/TodoProvider1'

const FormContext1 = () => {
    const { state, dispatch } = useContext(TodoContext);
    console.log("state= >", state)
    const [valueInput, setValueInput] = useState({
        username: "",
        email: ""
    })
    const changeHandler = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        setValueInput({ ...valueInput, [name]: value })
        // console.log(name, value)
    }
    const submitHandler = (e) => {
        e.preventDefault();
        if (valueInput.username.trim() !== "" && valueInput.email.trim() !== "") {
            if (state.updateId) {
                dispatch({
                    type: "edit",
                    payload: {
                        username: valueInput.username,
                        email: valueInput.email,
                        id: state.updateId.eleId
                    }
                })
            } else {
                dispatch({
                    type: "add",
                    payload: {
                        username: valueInput.username,
                        email: valueInput.email,
                        id: new Date().getTime().toString()
                    }
                })
            }
        }

        setValueInput({
            username: "",
            email: ""
        })
    }
    useEffect(() => {
        if (state.updateId) {
            const findOftodo = state.todo.find((ele) => ele.id === state.updateId.eleId)
            if (findOftodo) {
                setValueInput({ username: findOftodo.username, email: findOftodo.email })
            }
        }

    }, [state.updateId])
    return (
        <>
            <div style={{ width: "250px", margin: "0 auto" }}>
                username:- <input type="text"
                    id="username"
                    value={valueInput.username}
                    name="username"
                    onChange={changeHandler}
                /><br /><br />
                email:- <input type="email"
                    id="email"
                    value={valueInput.email}
                    name="email"
                    onChange={changeHandler}
                />
                <button type="submit" onClick={submitHandler}>click</button>
            </div>
        </>
    )
}

export default FormContext1;
