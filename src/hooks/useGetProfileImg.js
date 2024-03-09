import { useCallback, useEffect, useState } from 'react';

import createApiRequest from 'apis/createApiRequest';

// background-images 배열 받아오는 함수

function useGetProfileImageList() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getProfileImageList = useCallback(async () => {
    // api 요청
    const apiEndpoint = `profile-images/`;

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
    getProfileImageList();
  }, [getProfileImageList]);

  return { getProfileImageList, data, loading, error };
}

export default useGetProfileImageList;
