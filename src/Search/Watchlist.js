import React, { useContext } from 'react'
import { userContext } from '../Context/GlobalContextProvider'
const Watchlist = () => {
  const { state, dispatch } = useContext(userContext)
  return (
    <>
      {
        state.watchList.map((movie) => {
         console.log("watchlist movie=>", movie)
          return (
            <>
              <div>
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt=''
                  style={{ width: "100px", height: "170px", }}
                />
              </div>
            </>
          )
        })
      }
    </>
  )
}

export default Watchlist
