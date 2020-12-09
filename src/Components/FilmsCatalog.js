import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FilmCard from './FilmCard';
import Loader from './Loader';

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
		if (films.loading) return <Loader/>;

        return films.data.map((film)=>{return <FilmCard key = {film.episode_id}film = {film}/>})
    }

    const content = renderContent();

	return <div className = 'p-4 flex flex-row justify-between'>{content}</div>;
};

export default FilmsCatalog;
