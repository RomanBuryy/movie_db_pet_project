import React, {useEffect} from 'react';
import {Container, Grid} from "@mui/material";
import {makeStyles} from "@mui/styles";
import Movie from "../../components/Movie/Movie";
import {useDispatch, useSelector} from "react-redux";
import {getAllMovies} from "../../store";


const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(10),
        [theme.breakpoints.down("sm")]:{
            paddingTop: theme.spacing(15)
        }
    }
}))

const MoviesPage = () => {
    const classes = useStyles();

    const {movies} = useSelector(state => state['moviesReducer']);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getAllMovies())
    },[dispatch])

    return (
        <Container>
            <Grid container spacing={3} className={classes.container}>
                {/*{movies.results && movies.results.map((movie) => <Grid item sm={6} md={3} xs={12}>{movie.original_title}</Grid>)}*/}
                {movies.results && movies.results.map((movie) => <Movie key={movie.id} movie={movie} />)}
            </Grid>
        </Container>
    );
};

export default MoviesPage;