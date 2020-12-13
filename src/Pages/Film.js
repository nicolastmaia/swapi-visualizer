import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CharactersList from '../Components/CharactersList';
import { Divider } from 'antd';
import Loader from '../Components/Loader';
import { Typography } from 'antd';

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
		if (film.loading) return <Loader />;
		return (
			<div>
				<div style={{ display: 'flex', flexFlow: 'column', alignItems: 'center' }}>
					<Title style={{ color: '#c81a2b', fontWeight: 700 }}>{film.data.title + ' - Episode ' + film.data.episode_id}</Title>
				</div>
				<div>
					<Title style={{ color: 'white' }} level={4}>
						{film.data.opening_crawl}
					</Title>
					<Title style={{ color: 'white' }} level={4}>
						{'Release Date: ' + film.data.release_date}
					</Title>
					<Title style={{ color: 'white' }} level={4}>
						{'Director: ' + film.data.director}
					</Title>
					<Title style={{ color: 'white' }} level={4}>
						{'Producer: ' + film.data.producer}
					</Title>
				</div>
				<Divider />
				<Title style={{ color: 'white' }} level={2}>
					{'Characters List'}
				</Title>
				<Divider />
				<CharactersList charactersEndpoints={film.data.characters} />
			</div>
		);
	};

	const content = renderContent();

	return <div style={{ padding: '1rem' }}>{content}</div>;
};

export default Film;
