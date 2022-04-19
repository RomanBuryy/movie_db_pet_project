import React from 'react';
import {useParams} from "react-router-dom";

const CurrentGenreMoviesList = () => {

    const {id} = useParams()

    console.log(id)

    return (
        <div>
            CurrentGenreMoviesList
        </div>
    );
};

export default CurrentGenreMoviesList;