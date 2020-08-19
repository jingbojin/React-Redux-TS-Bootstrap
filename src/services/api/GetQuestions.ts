import {
  IApiQuestionsPayload,
} from '../../types/Interface';
import axios from "axios";

// Simulate axios api call to fetch exam data:
export const fetchTest = async (): Promise<IApiQuestionsPayload> => {
  // `test_data.json` located under `public`.
  // It is converted from above const `apiPayload`.
  return axios.get('test_data.json', { baseURL: window.location.origin })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error.response.data;
    });
}
