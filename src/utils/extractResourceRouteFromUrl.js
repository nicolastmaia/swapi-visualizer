import { baseURL } from "../data.json";

// função que extrai o ID do recurso da sua URL na SWAPI
const extractResourceRouteFromUrl = (url) => {
	const tmp = url.replace(baseURL, '');
	return tmp;
};

export default extractResourceRouteFromUrl;
