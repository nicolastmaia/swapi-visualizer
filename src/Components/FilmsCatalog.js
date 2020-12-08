import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Film from './Film';

const FilmsCatalog = () => {
	const [films, setFilms] = useState({
		data: [],
		loading: true,
	});

    const filmsUrl = 'https://swapi.dev/api/films';
    
	useEffect(() => {
		const fetchFilms = async () => {
			try {
				const response = await axios.get(filmsUrl);
				setFilms({ data: response.data.results, loading: false });
			} catch (error) {
				setFilms({ data: [], loading: false });
				console.log('Deu erro', error.message);
			}
		};

		fetchFilms();
    }, [filmsUrl]);
    
    const renderContent= () => {
        if (films.loading) return 'Loading...'
        return films.data.map((film)=>{return <Film film = {film}/>})
    }

    const content = renderContent();

	return <div>{films.loading ? 'Loading...' : content} </div>;
};

export default FilmsCatalog;
