import { useCallback, useEffect, useState } from 'react';

import createApiRequest from 'apis/createApiRequest';

// background-images 배열 받아오는 함수

function useGetBackgroundImageList() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getBackgroundImageList = useCallback(async () => {
    // api 요청
    const apiEndpoint = `background-images/`;

    try {
      const response = await createApiRequest().get(apiEndpoint);
      setData(response);
    } catch (errorData) {
      setError(errorData);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getBackgroundImageList();
  }, [getBackgroundImageList]);

  return { getBackgroundImageList, data, loading, error };
}

export default useGetBackgroundImageList;
