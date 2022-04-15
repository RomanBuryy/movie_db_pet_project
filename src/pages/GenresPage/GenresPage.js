import React, {useEffect} from 'react';
import {Grid} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {getAllGenres} from "../../store";
import {makeStyles} from "@mui/styles";


const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(10),
        [theme.breakpoints.down("sm")]:{
            paddingTop: theme.spacing(15)
        }
    }
}));

const GenresPage = () => {
    const classes = useStyles();

    const dispatch = useDispatch();
    const {genresList} = useSelector(state => state['moviesReducer']);

    useEffect(() => {
        dispatch(getAllGenres());
    }, [dispatch])

    console.log(genresList.genres)
    return (
        <Grid container className={classes.container}>
            {genresList.genres && genresList.genres.map(value=> <div> {value.name}</div>)}
        </Grid>
    );
};

export default GenresPage;