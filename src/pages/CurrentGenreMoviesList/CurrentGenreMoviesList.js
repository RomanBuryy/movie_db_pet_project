import React, {useEffect, useState} from 'react';
import {Outlet, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getAllMoviesWithGenre} from "../../store";
import Movie from "../../components/Movie/Movie";



const CurrentGenreMoviesList = () => {

    const {id} = useParams();
    const dispatch = useDispatch();
    const {movies, status, error} = useSelector(state => state['moviesReducer']);




    useEffect(()=>{
        dispatch(getAllMoviesWithGenre(id))
    }, [id]);

    return (

            <>
                {movies.results && movies.results.map((movie) => <Movie key={movie.id} movie={movie}/>)}
                <Outlet/>

            </>


    );
};

export default CurrentGenreMoviesList;