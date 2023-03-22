import axios, {AxiosResponse} from 'axios';
import { API_URL } from '../constants/app';

const fetcher = axios.create({ baseURL: API_URL });

fetcher.interceptors.response.use(
    (response:AxiosResponse) => {
        return response.data;
    },
    (error) => {
        const { status } = error;
        if (status >= 500) {
            console.log("ERROR", error);
        }
        if (status === 401) {
            console.log('All session is destroyed');
        }
        return Promise.reject(error);
    }
);

export default fetcher;