import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getAllMoviesWithGenre} from "../../store";

const CurrentGenreMoviesList = () => {

    const {id} = useParams();
    const dispatch = useDispatch();
    const {movies} = useSelector(state => state['moviesReducer']);


    useEffect(()=>{
        dispatch(getAllMoviesWithGenre(id))
    }, [dispatch,id]);

    return (
        <div>
            CurrentGenreMoviesList
        </div>
    );
};

export default CurrentGenreMoviesList;