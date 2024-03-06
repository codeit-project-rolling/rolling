import { useCallback, useEffect, useState } from 'react';

import createApiRequest from 'apis/createApiRequest';

// Github Wiki: API 명세 1-5) 롤링 페이퍼 대상 조회
// id: integer required
// 조회할 대상의 id

// 입력 값 검증 함수
function validateInput({ id }) {
  if (!id) {
    return 'Error(useGetRecipient): id가 없습니다.';
  }

  // 모든 검증을 통과한 경우
  return null;
}

const TEAM = process.env.REACT_APP_TEAM;

function useGetRecipient({ id }) {
  // 에러 처리
  const errorMessage = validateInput({ id });

  if (errorMessage) {
    console.log(errorMessage);
    return { data: null, loading: false, error: errorMessage };
  }

  const [recipientInfo, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getRecipient = useCallback(async () => {
    // api 요청
    const apiEndpoint = `${TEAM}/recipients/${id}/`;

    try {
      const response = await createApiRequest().get(apiEndpoint);
      setData(response);
    } catch (errorData) {
      setError(errorData);
    } finally {
      setLoading(false);
    }
    return null;
  }, [id]);

  useEffect(() => {
    getRecipient();
  }, [getRecipient]);

  return { getRecipient, recipientInfo, loading, error };
}

export default useGetRecipient;
