import React from 'react';
import {Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography} from "@mui/material";
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles(() => ({
    media: {
        height: 250
    }
}))

const Movie = () => {

    const classes = useStyles();

    return (
        <>
            Movie
        </>
    );
};

export default Movie;