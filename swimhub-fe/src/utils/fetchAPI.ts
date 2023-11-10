// utils/api.js
import axios from 'axios';
import { ResultType } from '../lib/types';

// update with swimhub API
const API_BASE_URL = 'https://dummyjson.com'; 
interface ApiResponse {
  posts: ResultType[];
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
