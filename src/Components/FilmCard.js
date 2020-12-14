import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card } from 'antd';
import { Typography, Image } from 'antd';
import extractResourceIdFrom from '../utils/extractResourceIdFrom';
import getFilmBanner from '../utils/getFilmBanner';
const { Title } = Typography;

const FilmCard = ({ film }) => {
	const resourceId = extractResourceIdFrom(film.url);
	const resourceRoute = `/films/${resourceId}`;
	const [banner, setBanner] = useState(null);

	useEffect(() => {
		const tmp = getFilmBanner(film.episode_id);
		setBanner(tmp);
	}, []);

	return (
		<Link to={resourceRoute}>
			<Card hoverable bordered={false} style={styles.card} cover={<Image alt='example' src={banner} />}>
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
	cardTitle: { color: '#d6d6d6' },
	cardButton: { backgroundColor: '#1c009e', borderColor: '#1c009e', color: '#d6d6d6', marginTop: '1rem' },
};
