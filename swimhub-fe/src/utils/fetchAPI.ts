import axios from 'axios';
import { EntryType } from '../lib/types';

const API_BASE_URL = 'https://swimhub-production.up.railway.app'; 
interface ApiResponse {
  entries: EntryType[];
}

export const fetchAPI = async (endpoint: string = ''): Promise<ApiResponse> => {
  try {
    const { data } = await axios.get<ApiResponse>(`${API_BASE_URL}/${endpoint}`);
    return data;
  } catch (error) {
    console.error(error);
    throw error; 
  }
};
