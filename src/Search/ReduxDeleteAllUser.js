import React from "react";
import { deleteUsers } from "./CreateAction";
import { useDispatch } from "react-redux";
export const ReduxDeleteAllUser = () => {
  const dispatch = useDispatch();
  const allDeleteHandler = () =>{
    dispatch(deleteUsers())
  }
  return (
    <>
     <button onClick={allDeleteHandler}>Delete</button>
    </>
  )
};