import React, { useContext } from 'react'
import { TodoContext } from './Context/TodoProvider';
const List = () => {
  const { state, dispatch } = useContext(TodoContext)

  const updateHandler = (eleId) => {
    { console.log("eleId => ", eleId) }
    dispatch({
      type: "updateId",
      payload:eleId
    })
  }
  const removeHandler = (eleId) => {
    dispatch({
      type: "delete",
      payload:eleId
    })
  }
  return (
    <>
      {
        state.todos.map((ele) => {
          return (
            <>
              <div style={{ width: "250px", margin: " 0 auto", border: "1px solid gray", marginTop: "20px", textAlign: "center" }} key={ele.id}>
                <h3>Title :- {ele.title}</h3>
                <p>Description :- {ele.description}</p>
                <button onClick={() => updateHandler(ele.id)}>Update </button>
                <button onClick={() => removeHandler(ele.id)}>Remove</button>
              </div>

            </>
          )
        })
      }
    </>
  )
}

export default List;
