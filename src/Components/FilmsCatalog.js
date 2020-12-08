import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FilmCard from './FilmCard';

const FilmsCatalog = () => {
	const [films, setFilms] = useState({
		data: [],
		loading: true,
	});

    const url = 'https://swapi.dev/api/films';
    
	useEffect(() => {
		const fetchFilms = async () => {
			try {
				const response = await axios.get(url);
				setFilms({ data: response.data.results, loading: false });
			} catch (error) {
				setFilms({ data: [], loading: false });
				console.log('Deu erro', error.message);
			}
		};

		fetchFilms();
    }, [url]);
    
    const renderContent= () => {
        if (films.loading) return 'Loading...'
        return films.data.map((film)=>{return <FilmCard key = {film.episode_id}film = {film}/>})
    }

    const content = renderContent();

	return <div>{films.loading ? 'Loading...' : content} </div>
};

export default FilmsCatalog;
