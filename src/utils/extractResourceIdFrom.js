const RESOURCE_ID_POSITION_IN_URL = 27;

// função que extrai o ID do recurso da sua URL na SWAPI
const extractResourceIdFrom = (url) => {
	let tmp = url.slice(RESOURCE_ID_POSITION_IN_URL);
	tmp.replace('/', '');
	return tmp;
};

export default extractResourceIdFrom;
