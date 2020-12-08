import React from 'react';
import { Link } from 'react-router-dom';

const FilmCard = ({film}) => {
    return(
        <div key = {film.episode_id}>
            <Link to = {`/films/${film.episode_id}`}>
            <h1>{film.title}</h1>
        </Link>
            <h4>{film.episode_id}</h4>
            <h4>{film.director}</h4>
        </div>
    )
};

export default FilmCard;
