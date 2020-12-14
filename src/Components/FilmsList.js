import { List } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import showErrorModal from '../utils/showErrorModal';
import FilmCard from './FilmCard';
import Loader from './Loader';

const FilmsList = () => {
	const [films, setFilms] = useState({
		data: [],
		loading: true,
	});

	const resourceUrl = 'https://swapi.dev/api/films';

	useEffect(() => {
		const fetchFilms = async () => {
			const response = await axios.get(resourceUrl);
			console.log(response);
			return response.data.results;
		};
		const orderFilms = (arr) => {
			const tmp = arr.sort(function (a, b) {
				return a.episode_id - b.episode_id;
			});
			return tmp;
		};

		const saveFilmsListToState = async () => {
			try {
				const unorderedFilms = await fetchFilms();
				const orderedFilms = orderFilms(unorderedFilms);
				setFilms({ data: orderedFilms, loading: false });
			} catch (error) {
				setFilms({ data: [], loading: false });
				showErrorModal();
			}
		};

		saveFilmsListToState();
	}, [resourceUrl]);

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
