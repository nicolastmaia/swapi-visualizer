import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { List } from 'antd';
import CharacterCard from './CharacterCard';
import Loader from './Loader';
import showErrorModal from '../utils/showErrorModal';

const CharactersList = ({ charactersEndpoints }) => {
	const [characters, setCharacters] = useState({
		data: [],
		loading: true,
	});

	useEffect(() => {
		let tmpCharacters = [];
		let errorCount = 0;

		const fetchCharacter = async (endpoint) => {
			const response = await axios.get(endpoint);
			return [response.data, ...tmpCharacters];
		};

		const saveCharactersToState = async () => {
			for (const endpoint of charactersEndpoints) {
				try {
					tmpCharacters = await fetchCharacter(endpoint);
					console.log(tmpCharacters);
				} catch (error) {
					errorCount++;
				}
			}
			setCharacters({ data: tmpCharacters, loading: false });
		};

		saveCharactersToState();

		if (errorCount > 0) {
			showErrorModal(errorCount);
		}
	}, []);

	const renderContent = () => {
		if (characters.loading) return <Loader />;

		return (
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
