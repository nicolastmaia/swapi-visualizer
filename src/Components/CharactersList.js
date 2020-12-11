import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { List } from 'antd';
import CharacterCard from './CharacterCard';
import Loader from './Loader';

const CharacterList = ({ charactersEndpoints }) => {
	const [characters, setCharacters] = useState({
		data: [],
		loading: true,
	});

	useEffect(() => {
		let tmpCharacters = [];
		const fetchCharacter = async (endpoint) => {
			try {
				const response = await axios.get(endpoint);
				return [response.data, ...tmpCharacters];
			} catch (error) {
				console.log('Deu erro', error.message);
			}
		};
		const fetchCharacters = async () => {
			for (const endpoint of charactersEndpoints) {
				tmpCharacters = await fetchCharacter(endpoint);
			}
			await charactersEndpoints.forEach((endpoint) => {
				fetchCharacter(endpoint);
			});
			console.log('hey:' + tmpCharacters.length);
			setCharacters({ data: tmpCharacters, loading: false });
		};
		fetchCharacters();
	}, []);

	const renderContent = () => {
		if (characters.loading) return <Loader/>;

		return (
			<List
				grid={{
					gutter: 16,
					xs: 1,
					sm: 2,
					md: 4,
					lg: 4,
					xl: 6,
					xxl: 3,
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

	return <div>{content}</div>;
};

export default CharacterList;
