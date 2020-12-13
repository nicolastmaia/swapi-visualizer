import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card } from 'antd';
import Banner from '../assets/img/teste.jpg';
import { Typography } from 'antd';
import { extractResourceIdFrom } from '../utils/extractResourceIdFrom';

const { Title } = Typography;

const FilmCard = ({ film }) => {

	const resourceId =  extractResourceIdFrom(film.url)

	return (
		<Link to={`/films/${resourceId}`}>
			<Card
				hoverable
				bordered={false}
				style={{ maxHeight: '100%', backgroundColor: '#3a3f41', width: '90%' }}
				cover={<img alt='example' src={Banner} />}
			>
				<Title ellipsis level={4} style={{ color: '#d6d6d6' }}>
					{film.title}
				</Title>
				<Title level={5} style={{ color: '#d6d6d6' }}>
					Episode: {film.episode_id}
				</Title>
				<Button block style={{ backgroundColor: '#1c009e', borderColor: '#1c009e', color: '#d6d6d6', marginTop: '1rem' }} type='primary'>
					More
				</Button>
			</Card>
		</Link>
	);
};

export default FilmCard;
