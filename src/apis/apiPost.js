import axios from 'axios';
import { useEffect, useState } from 'react';

const API_URL = 'https://rolling-api.vercel.app/0-3/';
const SUCCESS = 201;

function apiPost(apiEndpoint = '', postData = {}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const url = new URL(apiEndpoint, API_URL);
        const response = await axios.post(url, postData);

        if (response.status !== SUCCESS) {
          throw new Error(`Response error with status code: ${response.status}`);
        }

        setData(response.data);
      } catch (errorData) {
        const errorMessage = errorData.response ? errorData.response.data : errorData.toString();
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [apiEndpoint]);

  return { data, loading, error };
}

export default apiPost;
