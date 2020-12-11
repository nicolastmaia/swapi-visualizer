import React from 'react';
import { Card } from 'antd';
import Meta from 'antd/lib/card/Meta';

const CharacterCard = ({ character }) => {
	return (
		<Card title={character.name} style={{ borderColor: '#c3c3c3', backgroundColor: '#c3c3c3', width: 180, height: 270 }}>
			<span style={{ overflowY: 'scroll', overflowWrap: 'break-word', borderColor: '#c3c3c3', backgroundColor: '#c3c3c3' }}>
				<Meta description={'Birth Year: ' + character.birth_year} />
				<Meta description={'Gender: ' + character.gender} />
				<Meta description={'Height: ' + character.height} />
				<Meta description={'Mass: ' + character.mass} />
				<Meta description={'Hair Color: ' + character.hair_color} />
				<Meta description={'Skin Color: ' + character.skin_color} />
				<Meta description={'Eye Color: ' + character.eye_color} />
			</span>
		</Card>
	);
};

export default CharacterCard;
