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
      // For Github page, it needs a different URL:
      return gitHubPageFetch();
    });
}

export const gitHubPageFetch = async (): Promise<IApiQuestionsPayload> => {
  // https://stackoverflow.com/questions/51544117/axios-fetching-data-from-file-not-working-after-deploying-to-github-pages
  return axios.get('https://raw.githubusercontent.com/jingbojin/React-Redux-TS-Bootstrap/gh-pages/test_data.json', { baseURL: window.location.origin })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error.response.data;
    });
}
