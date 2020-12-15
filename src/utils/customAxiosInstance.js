import axios from 'axios';
import { baseURL } from '../data.json';

// url básica do axios alterada para a url padrao da SWAPI
axios.defaults.baseURL = baseURL;

export default axios
