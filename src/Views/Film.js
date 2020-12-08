import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CharacterList from '../Components/CharactersList';

const Film = () => {
	const { id } = useParams();
	const [film, setFilm] = useState({
		loading: true,
		data: [],
	});

	const url = `https://swapi.dev/api/films/${id}`;

	useEffect(() => {
		const fetchFilm = async () => {
			try {
				const response = await axios.get(url);
				setFilm({ data: response.data.results, loading: false });
			} catch (error) {
				setFilm({ data: [], loading: false });
				console.log('Deu erro', error.message);
			}
		};

		fetchFilm();
	}, [url]);

	const renderContent = () => {
		if (film.loading) return 'Loading...';
		return (
			<>
				<h1>{film.title}</h1>
				<h4>{film.director}</h4>
				<h4>{film.producer}</h4>
				<h4>{film.episode_id}</h4>
				<h4>{film.release_date}</h4>
				<CharacterList></CharacterList>
			</>
		)
	}

	const content = renderContent()

	return <div>{content}</div>
}

export default Film;
