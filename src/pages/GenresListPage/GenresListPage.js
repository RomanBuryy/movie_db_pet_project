import React, {useEffect} from 'react';
import {Container, Grid} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {Outlet} from "react-router-dom";

import {getAllGenres} from "../../store";
import Genre from "../../components/Genre/Genre";

const GenresListPage = () => {

    const dispatch = useDispatch();
    const {genresList} = useSelector(state => state['moviesReducer']);

    useEffect(() => {
        dispatch(getAllGenres());
    }, [dispatch])

    return (
        <Container>
            <Grid container spacing={3}>
                <Grid item md={2}>
                    {genresList.genres && genresList.genres.map(value => <Genre key={value.id} genre={value}/>)}
                </Grid>
                <Grid item md={10} sx={{display: "flex", flexWrap: "wrap", gap: "20px"}}>
                    <Outlet/>
                </Grid>
            </Grid>
        </Container>
    );
};

export default GenresListPage;