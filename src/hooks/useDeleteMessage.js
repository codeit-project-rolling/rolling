import { useCallback, useState } from 'react';

import createApiRequest from 'apis/createApiRequest';

// Github Wiki: API 명세 2-5) 메세지 삭제
// id: integer required
// 삭제할 메세지의 id

// 입력 값 검증 함수
function validateInput({ id }) {
  if (!id) {
    return 'Error(useDeleteMessage): id가 없습니다.';
  }

  // 모든 검증을 통과한 경우
  return null;
}

const TEAM = process.env.REACT_APP_TEAM;

function useDeleteMessage() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const deleteMessage = useCallback(async ({ id }) => {
    // 에러 처리
    const errorMessage = validateInput({ id });

    if (errorMessage) {
      console.log(errorMessage);
      return { loading: false, error: errorMessage };
    }

    // api 요청
    const apiEndpoint = `${TEAM}/messages/${id}/`;

    try {
      await createApiRequest().delete(apiEndpoint);
    } catch (errorData) {
      setError(errorData);
    } finally {
      setLoading(false);
    }

    return null;
  }, []);

  return { deleteMessage, loading, error };
}

export default useDeleteMessage;
