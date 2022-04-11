import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {getMovieDetails} from "../../store";
import {makeStyles} from "@mui/styles";
import {Box, Button, Card, CardActions, CardContent, CardMedia, Container, Rating, Typography} from "@mui/material";


const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(10),
        [theme.breakpoints.down("sm")]: {
            paddingTop: theme.spacing(15)
        }
    },
    genres:{
        display: "flex",
        alignItems: "center"
    },
    genres_item:{
        backgroundColor:"#F7AD19",
        borderRadius: 4,
        padding:"4px 8px"

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

    console.log(singleMovie.genres)
    return (
        <Container className={classes.container}>

            <Card sx={{display: "flex",height: 600, background: "linear-gradient(135deg, #00d2ff, #3a7bd5)", boxShadow: 2}}>
                <CardMedia sx={{width: 400}}
                           component="img"
                           image={`https://image.tmdb.org/t/p/w400/${singleMovie.poster_path}`}
                />
                <CardContent>
                    <Typography variant="h4" component="div" sx={{color: "#E3F9FF" }}>
                        {singleMovie.title}
                    </Typography>
                    <Rating name="read-only" value={singleMovie.vote_average} max={10} precision={0.5} size="small"
                            readOnly/>
                    <div className={classes.genres}>

                        {singleMovie && singleMovie.genres.map((genre) => {
                            return <Typography className={classes.genres_item} variant={"body2"}  mr={2}>{genre.name}</Typography>
                        })}


                    </div>
                    <Typography variant="body2" color="text.secondary">
                        {singleMovie.overview}
                    </Typography>
                </CardContent>

            </Card>

        </Container>
    );
};

export default SingleMoviePage;