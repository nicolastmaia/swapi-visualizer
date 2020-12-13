const RESOURCE_ID_POSITION_IN_URL = 27;
export const extractResourceIdFrom = (url) => {
	let tmp = url.slice(RESOURCE_ID_POSITION_IN_URL);
	tmp.replace('/', '');
	return tmp;
};
