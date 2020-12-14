import { Card } from 'antd';
import Meta from 'antd/lib/card/Meta';
import React, { useEffect } from 'react';

const CharacterCard = ({ character }) => {
	useEffect(() => {
		if (character.mass != 'unknown') {
			character.mass = character.mass + 'kg';
		}

		if (character.height != 'unknown') {
			character.height = character.height + 'cm';
		}
	}, []);

	return (
		<Card bordered={false} title={character.name} style={styles.card}>
			<div style={styles.cardText}>
				<Meta description={'Birth Year: ' + character.birth_year} />
				<Meta description={'Gender: ' + character.gender} />
				<Meta description={'Height: ' + character.height} />
				<Meta description={'Mass: ' + character.mass} />
				<Meta description={'Hair Color: ' + character.hair_color} />
				<Meta description={'Skin Color: ' + character.skin_color} />
				<Meta description={'Eye Color: ' + character.eye_color} />
			</div>
		</Card>
	);
};

export default CharacterCard;

const styles = {
	card: {
		backgroundColor: '#c3c3c3',
		width: '90%',
		height: '90%',
	},
	cardText: {
		overflowWrap: 'break-word',
		borderColor: '#c3c3c3',
		backgroundColor: '#c3c3c3',
	},
};
