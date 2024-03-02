import React, { useContext } from 'react';
import { TodoContext } from './Context/TodoProvider1';

const List1 = () => {
  const { state, dispatch } = useContext(TodoContext)
  const updateHandler = (eleId) => {
    dispatch({
      type: 'update',
      payload: {
        eleId
      }
    })
  }
  const removeHandler = (eleId) => {
    dispatch({
      type: "remove",
      payload: {
        eleId
      }
    })
  }
  return (
    <>
      {
        state.todo.map((ele) => {
          // console.log("ele => ", ele)
          return (
            <>
              <div style={{ width: "250px", margin: "0 auto", border: '1px solid blue', marginTop: "1rem", textAlign: "center" }}>
                <h3>{ele.username}</h3>
                <p>{ele.email}</p>
                <button onClick={() => updateHandler(ele.id)}>update</button>
                <button onClick={() => removeHandler(ele.id)}>remove</button>
              </div>
            </>
          )
        })
      }
    </>
  )
}

export default List1;
