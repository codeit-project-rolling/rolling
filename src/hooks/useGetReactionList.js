import { useCallback, useEffect, useState } from 'react';

import createApiRequest from 'apis/createApiRequest';

// Github Wiki: API 명세 3-4) 대상에게 단 리액션 조회
// id: integer required
// 조회할 대상의 id
// limit: integer
// 리턴받기 원하는 질문 대상 객체 수. 값을 전달하지 않으면 8개의 객체가 리턴됩니다.
// offset: integer
// 가장 앞 객체부터 건너뛰고 싶은 객체 수. 값을 전달하지 않으면 건너뛰지 않습니다.

// 입력 값 검증 함수
function validateInput({ id }) {
  if (!id) {
    return 'Error(useGetReactionList): id가 없습니다.';
  }

  // 모든 검증을 통과한 경우
  return null;
}

const TEAM = process.env.REACT_APP_TEAM;

function useGetReactionList({ id, limit, offset }) {
  // 에러 처리
  const errorMessage = validateInput({ id });

  if (errorMessage) {
    console.log(errorMessage);
    return { data: null, loading: false, error: errorMessage };
  }

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getReactionList = useCallback(async () => {
    // api 요청
    const queryParams = new URLSearchParams();

    if (limit) queryParams.append('limit', limit);
    if (offset) queryParams.append('offset', offset);

    const queryString = queryParams.toString();
    const apiEndpoint = `${TEAM}/recipients/${id}/reactions/${queryString ? `?${queryString}` : ''}`;

    try {
      const response = await createApiRequest().get(apiEndpoint);
      setData(response);
    } catch (errorData) {
      setError(errorData);
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    getReactionList();
  }, [getReactionList]);

  return { getReactionList, data, loading, error };
}

export default useGetReactionList;
