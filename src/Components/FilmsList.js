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

	const filmsUrl = 'https://swapi.dev/api/films';

	useEffect(() => {
		const fetchFilms = async () => {
			const response = await axios.get(filmsUrl);
			return response.data.results;
		};
		const orderFilms = (arr) => {
			const tmp = arr.sort(function (a, b) {
				return a.episode_id - b.episode_id;
			});
			return tmp;
		};

		const saveFilmsInState = async () => {
			try {
				const unorderedFilms = await fetchFilms();
				const orderedFilms = orderFilms(unorderedFilms);
				setFilms({ data: orderedFilms, loading: false });
			} catch (error) {
				setFilms({ data: [], loading: false });
			}
		};

		saveFilmsInState();
	}, [filmsUrl]);

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
				style={styles.list}
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

const styles = {
	list: { justifyContent: 'center' },
};
