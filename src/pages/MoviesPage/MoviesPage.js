import React, {useEffect} from 'react';
import {Container, Grid} from "@mui/material";
import {makeStyles} from "@mui/styles";
import Movie from "../../components/Movie/Movie";
import {useDispatch, useSelector} from "react-redux";
import {getAllMovies, getAMovies, getMovies} from "../../store";


const useStyles = makeStyles((theme) => {
    container: {
        paddingTop: theme.spacing(10)
    }
})

const MoviesPage = () => {

    const {movies} = useSelector(state => state['moviesReducer']);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getAllMovies())
    },[dispatch])


    return (
        <>

            {movies.results && movies.results.map((movie) => <div>{movie.original_title}</div>)}
        </>
    );
};

export default MoviesPage;