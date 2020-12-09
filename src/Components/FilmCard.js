import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../assets/img/teste.jpg'

const FilmCard = ({ film }) => {
	return (
		<div className='bg-black w-60 p-4 flex flex-col justify-center items-center' key={film.episode_id}>
			<div>
				<img className='w-full h-72 bg-cover' src={Banner} alt={film.title} />
			</div>
			<div className='text-center'>
				<Link to={`/films/${film.episode_id}`}>
					<div style={{ color: '#c81a2b' }}>Star Wars: {film.title}</div>
				</Link>
				<div style={{ color: '#fff' }}>Episode: {film.episode_id}</div>
				<div style={{ color: '#fff' }}>Director: {film.director}</div>
				<Link to={`/films/${film.episode_id}`}>
					<div className='bg-blue-500 mt-2 text-white p-2 flex justify-center w-full'>Show More</div>{' '}
				</Link>
			</div>
		</div>
	);
};

export default FilmCard;
