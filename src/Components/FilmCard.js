import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card } from 'antd';
import Banner from '../assets/img/teste.jpg';
import Meta from 'antd/lib/card/Meta';

const FilmCard = ({ film }) => {
	return (
		<Card hoverable style={{ borderColor: '#c3c3c3', backgroundColor: '#c3c3c3', width: 180 }} cover={<img alt='example' src={Banner} />}>
			<Meta title={'Star Wars: ' + film.title} description={'Episode: ' + film.episode_id} />
			<Link to={`/films/${film.episode_id}`}>
				<Button style={{ marginTop: '1rem' }} type='primary'>
					Show More
				</Button>
			</Link>
		</Card>
	);
};

export default FilmCard;
