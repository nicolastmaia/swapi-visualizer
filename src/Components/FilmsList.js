import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FilmCard from './FilmCard';
import Loader from './Loader';
import { List } from 'antd';

const FilmsList = () => {
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

	const renderContent = () => {
		if (films.loading) return <Loader />;

		return (
			<List
				grid={{
					gutter: [24, 24],
					xs: 1,
					sm: 3,
					md: 4,
					lg: 5,
					xl: 6,
				}}
				dataSource={films.data}
				style={{lignItems: 'center', justifyContent: 'center' }}
				renderItem={(film) => (
					<List.Item>
						<FilmCard key={film.episode_id} film={film} />
					</List.Item>
				)}
			/>
		);
	};

	const content = renderContent();

	return content;
};

export default FilmsList;
