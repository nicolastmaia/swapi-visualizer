import axios from 'axios';
import { baseURL } from '../data.json';

axios.defaults.baseURL = baseURL;

export default axios
