import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {makeStyles} from "@mui/styles";
import {Card, CardContent, CardMedia, Container, Rating, Typography} from "@mui/material";

import {getMovieDetails} from "../../store";


const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(10),
        [theme.breakpoints.down("sm")]: {
            paddingTop: theme.spacing(15)

        }
    },
    card:{
        display: "flex",
        background: "linear-gradient(135deg, #00d2ff, #3a7bd5)",
        boxShadow: 2,
        [theme.breakpoints.down("md")]: {
            flexDirection: "column"
        }
    },
    genres: {
        display: "flex",
        alignItems: "center",
        marginTop:"12px"

    },
    genres_item: {
        backgroundColor: "#FFEB3B",
        borderRadius: 4,
        padding: "4px 8px",
        marginRight: "12px"
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
            <Card className={classes.card}>
                <CardMedia
                           component="img"
                           image={`https://image.tmdb.org/t/p/w400/${singleMovie.poster_path}`}
                />
                <CardContent>
                    <Typography variant="h4" component="div" sx={{color: "#E3F9FF"}}>
                        {singleMovie.title}
                    </Typography>
                    <Rating sx={{ marginTop:"8px"}} name="read-only" value={singleMovie.vote_average ?? 0} max={10} precision={0.5} size="small"
                            readOnly/>
                    <div className={classes.genres}>
                        {singleMovie.genres && singleMovie.genres.map((genre) => {
                            return <div key={genre.name} className={classes.genres_item}><Typography
                                variant={"body2"}>{genre.name}</Typography></div>
                        })}
                    </div>
                    <Typography variant="body1" component="div" sx={{color: "#fff", marginTop: "36px", fontWeight:300}}>
                        {singleMovie.overview}
                    </Typography>
                </CardContent>
            </Card>
        </Container>
    );
};

export default SingleMoviePage;