import React, { useEffect, useState } from 'react'

const TodosApp = () => {
    const getValue = () => {
        const list = localStorage.getItem("items");
        if (list) {
            return JSON.parse(localStorage.getItem("items"))
        } else {
            return []
        }
    }
    const [value, setValue] = useState("");
    const [addValue, setAddValue] = useState(getValue())
    const changeHandler = (e) => {
        const value = e.target.value;
        setValue(value)
        // console.log(value)
    }
    const clickHandler = () => {
        if (!value) {

        } else {
            setAddValue((prev) => [...prev, value])
            setValue("")

        }
    }

    useEffect(() => {
        localStorage.setItem("items", JSON.stringify(addValue))
    }, [addValue])
    const removeHandler = (indexValue) => {
        const filterMethod = addValue.filter((add, ind) => (indexValue !== ind))
        setAddValue(filterMethod)
    }

    return (
        <div style={{ border: "1px solid red", width: "337px", height: "30px" }}>
            <input type="text"
                style={{ width: "300px", height: '25px', border: "none", outline: "none" }}
                onChange={changeHandler}
                value={value}
            />
            <button style={{ height: "100%", background: "red" }}
                onClick={clickHandler}
            >
                add
            </button>
            <div>{addValue.map((addValue, index) => {
                return (
                    <>
                        <div style={{ display: "flex", alignItems: "center" }} key={index}>
                            <p>{addValue},{index}</p>
                            <button style={{ marginLeft: "5px", width: "25px", height: "25px" }} onClick={() => removeHandler(index)}>Dlt</button>
                        </div>
                    </>
                )
            })}</div>
            <br />
            <div><button onClick={() => setAddValue([])}>Remove All</button></div>

        </div>
    )
}

export default TodosApp;
