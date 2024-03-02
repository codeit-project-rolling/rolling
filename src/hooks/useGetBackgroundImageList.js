import { useEffect, useState } from 'react';

import createApiRequest from 'apis/createApiRequest';

// background-images 배열 받아오는 함수

function useGetBackgroundImageList() {
  // api 요청
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiEndpoint = `background-images/`;

  useEffect(async () => {
    try {
      const response = await createApiRequest().get(apiEndpoint);
      setData(response?.data);
    } catch (errorData) {
      setError(errorData);
    } finally {
      setLoading(false);
    }
  }, [apiEndpoint]);

  return { data, loading, error };
}

export default useGetBackgroundImageList;
