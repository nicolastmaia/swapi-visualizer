import React from 'react';

const Film = ({film}) => {
    return(
        <div>
            <h1>{film.title}</h1>
            <h4>{film.director}</h4>
            <h4>{film.producer}</h4>
            <h4>{film.episode_id}</h4>
            <h4>{film.release_date}</h4>
            <div>Ver Personages</div>
        </div>
    )
};

export default Film;
