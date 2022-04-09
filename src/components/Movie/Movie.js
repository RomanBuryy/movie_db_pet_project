import React from 'react';
import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Grid,
    Rating,
    Typography
} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {Link, NavLink, useParams} from "react-router-dom";

const useStyles = makeStyles(() => ({
    cardLink: {
        textDecoration: "none",
        color: "white"
    }
}))

const Movie = ({movie}) => {

    const classes = useStyles();

    return (
        <Grid item sm={5} md={4} xl={3} xs={12}>
            <Link to={movie.id.toString()} className={classes.cardLink}>
            <Card sx={{
                color: 'white',
                background: 'linear-gradient(to right bottom, #00d2ff, #3a7bd5)',
                boxShadow: 2,
            }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="450"
                        image={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Rating name="read-only" value={movie.vote_average} max={10} precision={0.5} size="small"
                                readOnly/>
                        <Typography gutterBottom variant="h5" component="div">
                                {movie.title}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            </Link>
        </Grid>
    );
};

export default Movie;