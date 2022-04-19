import React from 'react';
import {Link} from "react-router-dom";

const Genre = ({genre}) => {


    return (
        <div>
            <Link to={genre.id.toString()}> {genre.name} </Link>
        </div>
    );
};

export default Genre;