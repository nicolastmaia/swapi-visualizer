import banner01 from '../assets/img/star-wars-01.jpg';
import banner02 from '../assets/img/star-wars-02.jpg';
import banner03 from '../assets/img/star-wars-03.jpg';
import banner04 from '../assets/img/star-wars-04.jpg';
import banner05 from '../assets/img/star-wars-05.jpg';
import banner06 from '../assets/img/star-wars-06.jpg';

// função que retorna o banner do filme correto baseado no seu número de episódio.
const getFilmBanner = (filmEpisodeId) => {
	let banner;

	switch (filmEpisodeId) {
		case 1:
			banner = banner01;
			break;
		case 2:
			banner = banner02;
			break;
		case 3:
			banner = banner03;
			break;
		case 4:
			banner = banner04;
			break;
		case 5:
			banner = banner05;
			break;
		case 6:
			banner = banner06;
			break;

		default:
			break;
	}

	return banner;
};

export default getFilmBanner;
