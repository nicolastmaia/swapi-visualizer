import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CharacterList from '../Components/CharactersList';
import { Divider } from 'antd';
import { Typography } from 'antd';
import Loader from '../Components/Loader';

const { Title } = Typography;

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
		if (film.loading) return <Loader/>;
		return (
			<div style={{ padding: '1rem' }}>
				<div>
					<Title style={{ color: '#c81a2b' }}>{film.data.title}</Title>
					<Title style={{ color: 'white' }} level={2}>
						{'Episode: ' + film.data.episode_id}
					</Title>
					<Title style={{ color: 'white' }} level={3}>
						{'Release Date: ' + film.data.release_date}
					</Title>
					<Title style={{ color: 'white' }} level={3}>
						{'Director: ' + film.data.director}
					</Title>
					<Title style={{ color: 'white' }} level={3}>
						{'Producer: ' + film.data.producer}
					</Title>
				</div>
				<Divider />
				<Title style={{ color: 'white' }} level={3}>
					{'Characters List'}
				</Title>
				<CharacterList charactersEndpoints={film.data.characters} />
			</div>
		);
	};

	const content = renderContent();

	return <div>{content}</div>;
};

export default Film;
