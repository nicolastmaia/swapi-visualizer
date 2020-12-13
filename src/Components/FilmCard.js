import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card } from 'antd';
import Banner from '../assets/img/teste.jpg';
import { Typography } from 'antd';
import { extractResourceIdFrom } from '../utils/extractResourceIdFrom';

const { Title } = Typography;

const FilmCard = ({ film }) => {

	const resourceId =  extractResourceIdFrom(film.url)
	const resourceRoute = `/films/${resourceId}`;
	
	return (
		<Link to={resourceRoute}>
			<Card hoverable bordered={false} style={styles.card} cover={<img alt='example' src={Banner} />}>
				<Title ellipsis level={4} style={styles.cardTitle}>
					{film.title}
				</Title>
				<Title level={5} style={styles.cardTitle}>
					Episode: {film.episode_id}
				</Title>
				<Button block style={styles.cardButton} type='primary'>
					More
				</Button>
			</Card>
		</Link>
	);
};

export default FilmCard;

const styles = {
	card: { maxHeight: '100%', backgroundColor: '#3a3f41', width: '90%' },
	cardTitle:{ color: '#d6d6d6' },
	cardButton:{ backgroundColor: '#1c009e', borderColor: '#1c009e', color: '#d6d6d6', marginTop: '1rem' }
};
