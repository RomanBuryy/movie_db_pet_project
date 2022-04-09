import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {getMovieDetails} from "../../store";
import {makeStyles} from "@mui/styles";
import {Container} from "@mui/material";


const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(10),
        [theme.breakpoints.down("sm")]: {
            paddingTop: theme.spacing(15)
        }
    }
}))

const SingleMoviePage = () => {

    const classes = useStyles();

    const params = useParams();
    const dispatch = useDispatch();
    const {singleMovie} = useSelector(state => state['moviesReducer']);

    useEffect(() => {

        dispatch(getMovieDetails(params.id));
    }, [dispatch, params]);

    return (
        <Container className={classes.container}>

            {singleMovie.overview}
            {singleMovie.genres.map(genresPage => genresPage.name)}
        </Container>
    );
};

export default SingleMoviePage;