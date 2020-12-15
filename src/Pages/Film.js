import { Divider, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CharactersList from '../Components/CharactersList';
import Loader from '../Components/Loader';
import showErrorModal from '../utils/showErrorModal';
import axiosInstance  from "../utils/customAxiosInstance";

const { Title } = Typography;

// página de cada filme individual. Contém as informações mais relevantes do filme em questão e também a lista de personagens do filme.
const Film = () => {
	// id do filme a ser usado para pegar seus dados individuais da SWAPI
	const { resourceId } = useParams();

	const [film, setFilm] = useState({
		loading: true,
		data: {},
	});

	// endpoint com os dados do filme na SWAPI
	const resourceEndpoint = `/films/${resourceId}`;

	// função que é executada toda em toda primeira renderização da página
	useEffect(() => {
		// função que utiliza o axios para pegar os dados do filme da SWAPI
		const fetchFilm = async () => {
			const response = await axiosInstance.get(resourceEndpoint);
			console.log(response.data)
			return response.data;
		};

		// função que busca e salva no estado os dados buscados na SWAPi. Se der algum erro, um modal com uma mensagem de erro é mostrado.
		const saveFilmInfoToState = async () => {
			try {
				const filmInfo = await fetchFilm();
				setFilm({ data: filmInfo, loading: false });
			} catch (error) {
				setFilm({ data: {}, loading: false });
				showErrorModal();
			}
		};

		saveFilmInfoToState();
	}, []);

	const renderContent = () => {
		// retorna um ícone de carregamento enquanto o recurso buscado não estiver pronto.
		if (film.loading) return <Loader />;

		return (
			<div>
				{/* informações sobre o filme */}
				<div style={{ display: 'flex', flexFlow: 'column', alignItems: 'center' }}>
					<Title style={styles.filmTitle}>{film.data.title + ' - Episode ' + film.data.episode_id}</Title>
				</div>
				<div>
					<Title style={styles.filmInfo} level={4}>
						{film.data.opening_crawl}
					</Title>
					<Title style={styles.filmInfo} level={4}>
						{'Release Date: ' + film.data.release_date}
					</Title>
					<Title style={styles.filmInfo} level={4}>
						{'Director: ' + film.data.director}
					</Title>
					<Title style={styles.filmInfo} level={4}>
						{'Producer: ' + film.data.producer}
					</Title>
				</div>

				<Divider />

				{/* Lista de personagens do filme */}
				<Title style={styles.filmInfo} level={2}>
					{'Characters List'}
				</Title>
				<Divider />
				{/* componente lista de personagens. recebe como prop um array contendo os endpoints de cada personagem na SWAPI */}
				<CharactersList charactersUrls={film.data.characters} />
			</div>
		);
	};

	const content = renderContent();

	return content;
};

const styles = {
	filmTitle: { color: '#c81a2b', fontWeight: 700 },
	filmInfo: { color: '#ffffff' },
};

export default Film;
