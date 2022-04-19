import React, {useEffect} from 'react';
import {Grid} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {makeStyles} from "@mui/styles";
import {Outlet} from "react-router-dom";

import {getAllGenres} from "../../store";
import Genre from "../../components/Genre/Genre";



const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(10),
        [theme.breakpoints.down("sm")]:{
            paddingTop: theme.spacing(15)
        },
        display: "flex"
    }
}));

const GenresListPage = () => {
    const classes = useStyles();

    const dispatch = useDispatch();
    const {genresList} = useSelector(state => state['moviesReducer']);



    useEffect(() => {
        dispatch(getAllGenres());
    }, [dispatch])

    return (
        <Grid container className={classes.container}>

            <Grid item>
                {genresList.genres && genresList.genres.map(value=> <Genre key={value.id} genre={value}/>)}
            </Grid>
            <Outlet/>
        </Grid>
    );
};

export default GenresListPage;