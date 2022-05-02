import React, {useEffect} from 'react';
import {Container, Grid} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";

import Movie from "../../components/Movie/Movie";
import {getAllMovies} from "../../store";


const MoviesPage = () => {

    const {movies} = useSelector(state => state['moviesReducer']);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllMovies())
    }, [dispatch])

    return (
        <Container>
            <Grid container spacing={3}>
                {movies.results && movies.results.map((movie) => <Movie key={movie.id} movie={movie}/>)}
            </Grid>
        </Container>
    );
};

export default MoviesPage;