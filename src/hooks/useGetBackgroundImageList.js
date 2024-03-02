import { useEffect, useState } from 'react';

import createApiRequest from 'apis/createApiRequest';

// background-images 배열 받아오는 함수

function useGetBackgroundImageList() {
  // api 요청
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(async () => {
    const apiEndpoint = `background-images/`;

    try {
      const response = await createApiRequest().get(apiEndpoint);
      setData(response?.data);
    } catch (errorData) {
      setError(errorData);
    } finally {
      setLoading(false);
    }
  }, []);

  return { data, loading, error };
}

export default useGetBackgroundImageList;
