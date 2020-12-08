import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CharacterList from '../Components/CharactersList';

const Film = () => {
	const { id } = useParams();
	const [film, setFilm] = useState({
		loading: true,
		data: {},
	});

	const url = `https://swapi.dev/api/films/${id}`;

	useEffect(() => {
		const fetchFilm = async () => {
			try {
				const response = await axios.get(url);
				console.log(response.data);
				setFilm({ data: response.data, loading: false });
			} catch (error) {
				setFilm({ data: {}, loading: false });
				console.log('Deu erro', error.message);
			}
		};

		fetchFilm();
	}, [url]);

	const renderContent = () => {
		if (film.loading) return 'Loading...';
		return (
			<>
				<h1>{film.data.title}</h1>
				<h4>{film.data.director}</h4>
				<h4>{film.data.producer}</h4>
				<h4>{film.data.episode_id}</h4>
				<h4>{film.data.release_date}</h4>
				<CharacterList></CharacterList>
			</>
		)
	}

	const content = renderContent()

	return <div>{content}</div>
}

export default Film;
