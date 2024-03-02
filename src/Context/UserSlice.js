import React from 'react'
import { createSlice } from "@reduxjs/toolkit"
import { deleteUsers } from '../Search/CreateAction';
const userSlice = createSlice({
    name: "user",
    initialState: [],
    reducers: {
        addUser(state, action) {
            state.push(action.payload);
            console.log(action.payload);
        },
        removeUser(state, action) {
            state.splice(action.payload, 1)
        },
        // deleteUsers(state, action) {
        //     return [];
        // },
    },
    extraReducers(builder) {
        builder.addCase(deleteUsers, () => {
            return [];
        })
    }
})
console.log(userSlice.actions)
export default userSlice.reducer;
export const { addUser, removeUser} = userSlice.actions;
