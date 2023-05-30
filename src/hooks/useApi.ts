import axios from 'axios';
import { environment } from '../environments/environment';

export const api = axios.create({
  baseURL: environment.baseUrl,
});

export const apiConfig = {
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Authorization",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE" ,
    "Content-Type": "application/json;charset=UTF-8"
  },
}

export const useApi = () => ({


  signIn: async (email: string, password: string) => {
    const result = await api.post(environment.routes.auth.login, { email, password }, apiConfig);
    return result.data;
  },
});
