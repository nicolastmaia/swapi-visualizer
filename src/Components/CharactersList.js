import { List } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import showErrorModal from '../utils/showErrorModal';
import CharacterCard from './CharacterCard';
import Loader from './Loader';

// lista de personagens. recebe como prop um array contendo os endpoints de cada personagem na SWAPI
const CharactersList = ({ charactersEndpoints }) => {
	const [characters, setCharacters] = useState({
		data: [],
		loading: true,
	});

	// função que é executada toda em toda primeira renderização do componente
	useEffect(() => {
		// array auxiliar para guardar as informações individuais de cada parsonagem enquanto são buscados
		let tmpCharacters = [];

		// variável que guarda QUANTOS erros ocorreram enquanto buscando pelos dados dos personagens na SWAPI
		let errorCounter = 0;

		// função que busca dados um personagem individual na SWAPI
		const fetchCharacter = async (endpoint) => {
			const response = await axios.get(endpoint);
			return [response.data, ...tmpCharacters];
		};

		// função que busca e salva no estado os dados buscados na SWAPi
		const saveCharactersToState = async () => {
			// para cada endpoint no array de endpoints de personagens, a função faz uma request à SWAPI para pegar os dados daquele personagem
			for (const endpoint of charactersEndpoints) {
				try {
					tmpCharacters = await fetchCharacter(endpoint);
				} catch (error) {
					//caso ocorra um erro em algum dos endpoints, a função apenas soma 1 ao counter de erros e tenta buscar os dados do próximo personagem na lista
					errorCounter++;
				}
			}
			setCharacters({ data: tmpCharacters, loading: false });
		};

		saveCharactersToState();

		// caso tenha acontecido algum erro na etapa anterior, um modal personalizado é exibido dizendo quantos erros ocorreram.
		if (errorCounter > 0) {
			showErrorModal(errorCounter);
		}
	}, []);

	const renderContent = () => {
		// retorna um ícone de carregamento enquanto o recurso buscado não estiver pronto.
		if (characters.loading) return <Loader />;

		return (
			// component <List> da biblioteca antd,
			<List
				grid={{
					gutter: [16, 16],
					xs: 1,
					sm: 2,
					md: 4,
					lg: 5,
					xl: 6,
				}}
				dataSource={characters.data}
				renderItem={(character) => (
					<List.Item>
						{/* um card para cada um dos personagens que <List> encontra da dataSource indicada acima */}
						<CharacterCard character={character} />
					</List.Item>
				)}
			/>
		);
	};

	const content = renderContent();

	return content;
};

export default CharactersList;
