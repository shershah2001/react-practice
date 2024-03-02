import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MdDeleteForever } from 'react-icons/md';
import { UseDispatch } from 'react-redux';
import { removeUser } from '../Context/UserSlice';
const ReduxDisplayUser = () => {
    const dispatch  = useDispatch();
    const data = useSelector((state)=>{
        return state.users
    })
const singleDeleteHandler = (id)=>{
 dispatch(removeUser(id))
}
  return (
    <div>
      {
        data.map((items,id)=>{
            return (
                <>
                 <li key={id}>
                    {items}
                    <MdDeleteForever className="delete-icon" onClick={()=>singleDeleteHandler(id)}/>
                 </li>
                </>
            )
        })
      }
    </div>
  )
}

export default ReduxDisplayUser
