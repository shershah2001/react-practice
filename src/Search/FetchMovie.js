import React, { useContext, useState } from 'react'
import { userContext } from '../Context/GlobalContextProvider';
const FetchMovie = () => {
    const [movies, setMovies] = useState([]);
    const [err, setErr] = useState('')
    const [search, setSearch] = useState('')
    const { state, dispatch } = useContext(userContext)
    const changeHandler = (e) => {
        const value = e.target.value;
        setSearch(value)
    }



    const fetchMovieData = async () => {
        const API_KEY = "84ebc29e19fdea8a57a599a5928e7e0d";
        const URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${search}`;
        try {
            const response = await fetch(URL)
            if (!response.ok) {
                throw new Error(`HTTPS! ERROR ${response.status}`)
            }
            const data = await response.json();
            if (!data.results) {
                throw new Error(`something went wrong data n't pass`)
            }
            setMovies(data.results);
        } catch (error) {
            setErr(error.message)
        }
    }
    const WatchLaterHandler = (movieId) => {
        const findMovie = movies.find((ele) => ele.id === movieId);
        const isMovieAlreadyPresent = state.watchList.some((ele) => ele.id === movieId);
        if (!isMovieAlreadyPresent) {
            dispatch({
                type: "Add_Movie_To_WatchLater",
                payload: {
                    movies: findMovie,
                    ismovie: isMovieAlreadyPresent

                }
            })
        }
    }
    const watchHistoryHandler = () => {

    }
    return (
        <>
            <div>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "150px"
                    }}
                >
                    <input type="text"
                        value={search}
                        onChange={changeHandler}
                        style={{
                            backgroundColor: "#313131",
                            border: "none",
                            width: "500px",
                            height: "50px",
                            color: "white",
                            outline: "none",
                            paddingLeft: "0.5rem",
                            borderRadius: "5px 0 0 5px"
                        }}
                    />
                    <button
                        style={{
                            background: "#9292f6",
                            border: "none",
                            padding: "1.12rem",
                            borderRadius: "0 5px 5px 0",
                            color: "white",
                            fontWeight: '700',
                            cursor: "pointer"
                        }}
                        onClick={() => (fetchMovieData(), setSearch(""))}
                    >
                        Search
                    </button>
                </div>
                {movies.length > 0
                    ? (
                        <div style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            marginTop: '0rem'
                        }}>

                            <div

                            >
                                {
                                    movies.map((ele) => {
                                        return (
                                            <>
                                                <div
                                                    style={{
                                                        display: "flex",
                                                        marginTop: ".5rem"
                                                    }}
                                                >
                                                    <img src={`https://image.tmdb.org/t/p/w500/${ele.poster_path}`}
                                                        alt=''
                                                        style={{ width: "100px", height: "170px", }}
                                                    />

                                                    <div >
                                                        <p
                                                            style={{ marginLeft: "1rem" }}
                                                        >
                                                            {ele.original_title}
                                                        </p>
                                                        <div
                                                            style={{ marginLeft: "1rem" }}
                                                        >
                                                            <button onClick={() => WatchLaterHandler(ele.id)}>
                                                                Watch Later
                                                            </button>
                                                            <button onClick={watchHistoryHandler}>
                                                                Watch History
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>

                                            </>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    )
                    : (<p>{err}</p>)
                }
            </div>
        </>
    )
}

export default FetchMovie;
