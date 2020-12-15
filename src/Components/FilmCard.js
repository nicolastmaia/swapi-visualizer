import { Button, Card, Image, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import extractResourceRouteFromUrl from '../utils/extractResourceRouteFromUrl';
import getFilmBanner from '../utils/getFilmBanner';
const { Title } = Typography;

// cartão com o banner, nome e episódio de um filme individual
const FilmCard = ({ film }) => {
	// extrai da url do recurso na SWAPI a rota LOCAL do filme que este cartão representa
	const resourceRoute = extractResourceRouteFromUrl(film.url);

	// banner do filme que este cartão representa
	const [banner, setBanner] = useState(null);

	// função que é executada toda em toda primeira renderização do componente
	useEffect(() => {
		//função getFilmBanner sendo chamada para buscar o banner correto do filme de acordo com seu episódio
		const tmp = getFilmBanner(film.episode_id);
		setBanner(tmp);
	}, []);

	return (
		// o componente <Link> com a rota local referente ao filme que este cartão representa
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
