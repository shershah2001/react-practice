import React, { createContext, useEffect, useReducer } from 'react'
const initialState = {
    watchList: localStorage.getItem('watchlistMovie') ? JSON.parse(localStorage.getItem('watchlistMovie')) : [],
    watched: []
}
export const userContext = createContext(initialState)
// console.log("userContext =>",userContext._currentValue.watchList)

const reducer = (state,action) =>{
    switch(action.type){
        case "Add_Movie_To_WatchLater":
            return{
                ...state,
               watchList:[...state.watchList, action.payload.movies] 
            }
        default:
            return state;
    }
}
const GlobalContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    useEffect(()=>{
        localStorage.setItem("watchlistMovie", JSON.stringify(state.watchList))
    },[state])
    return (
        <userContext.Provider value={{ state, dispatch }}>
            {children}
        </userContext.Provider>
    )
}

export default GlobalContextProvider;
