import React, { useEffect, useState } from "react";
import './Todos.css'
const Todos = () => {
    const getDate = () => {
        const list = localStorage.getItem("todoValues");
        if (list) {
            return JSON.parse(localStorage.getItem("todoValues"));
        } else {
            return []
        }
    }
    const [inputValue, setInputValue] = useState();
    const [arrvalue, setArrValue] = useState(getDate());
    const [editValue, setEditValue] = useState(false);
    const [getId, setGetId] = useState(null);
    
    const changeHandler = (e) => {
        const value = e.target.value;
        setInputValue(value);
    }
    useEffect(() => {
        localStorage.setItem("todoValues", JSON.stringify(arrvalue))
    }, [arrvalue])
    const addHandler = (getId) => {
        if (!inputValue) {

        } else if (inputValue && getId) {
            setArrValue(
                arrvalue.map((ele) => {
                    if (ele.id === getId) {
                        return { ...ele, name: inputValue }
                    }
                    return ele;
                })
            )
            setEditValue(!editValue)
            setInputValue("")
            setGetId(null)
        } else {
            const allItems = { id: new Date().getTime().toString(), name: inputValue }
            setArrValue((prev) => [...prev, allItems])
            setInputValue('')
        }

    }
    const deleHandler = (eleId) => {
        const filterData = arrvalue.filter((items) => (items.id !== eleId));
        setArrValue(filterData);
    }
    const editHandler = (eleId) => {
        setEditValue(!editValue)
        const findValue = arrvalue.find((element) => eleId === element.id);
        setInputValue(findValue.name)
        setGetId(findValue.id)
    }
    return (
        <>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <div className="inputDiv">
                    <input type="text"
                        placeholder="write here"
                        value={inputValue}
                        onChange={changeHandler}
                    />
                    <button onClick={() => addHandler(getId)}>
                        {editValue === true ? <i class="fa fa-pencil-square-o" aria-hidden="true"></i> :
                            <i class="fa fa-plus" aria-hidden="true"></i>
                        }
                    </button>
                    <div className="mapClass" style={{ marginTop: "25px" }}>
                        {
                            arrvalue.map((ele) => {

                                return (
                                    <>
                                        <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} key={ele.id}>
                                            <p >{ele.name}</p>
                                            <div className="buttonDiv">
                                                <button className="butnedit" onClick={() => editHandler(ele.id)}>
                                                    <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                                                </button>
                                                <button onClick={() => deleHandler(ele.id)}>
                                                    <i class="fa fa-trash" aria-hidden="true"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>

            </div>
        </>
    )
}
export default Todos;

