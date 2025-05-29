import _axios from 'axios';

export const axios = _axios.create({ baseURL: '/api', withCredentials: true });
