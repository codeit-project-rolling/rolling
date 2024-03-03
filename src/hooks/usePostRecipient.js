import { useCallback, useState } from 'react';

import createApiRequest from 'apis/createApiRequest';

// Github Wiki: API 명세 1-3) 롤링 페이퍼 대상 생성
// name: string required
// 롤링 페이퍼 대상의 이름.
// backgroundColor: string required
// 롤링 페이퍼 대상 게시글이 사용할 배경색. “beige” | “purple” | “blue” | “green” 중 하나의 값을 사용해야 합니다.
// backgroundImageURL: string
// 배경 이미지 url

const BACKGROUND_COLOR_LIST = ['beige', 'purple', 'blue', 'green'];

// 입력 값 검증 함수
function validateInput({ name, backgroundColor }) {
  if (!name) {
    return 'Error(usePostRecipient): name이 없습니다.';
  }

  if (!backgroundColor) {
    return 'Error(usePostRecipient): backgroundColor가 없습니다.';
  }

  if (!BACKGROUND_COLOR_LIST.includes(backgroundColor)) {
    return 'Error(usePostRecipient): backgroundColor가 올바르지 않습니다.';
  }

  // 모든 검증을 통과한 경우
  return null;
}

const TEAM = process.env.REACT_APP_TEAM;

function usePostRecipient() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const postRecipient = useCallback(async ({ name, backgroundColor, backgroundImageURL }) => {
    // 에러 처리
    const errorMessage = validateInput({ name, backgroundColor });

    if (errorMessage) {
      console.log(errorMessage);
      return setError(errorMessage);
    }

    // api 요청
    const apiEndpoint = `${TEAM}/recipients/`;
    const postData = { name, backgroundColor, backgroundImageURL };

    try {
      const response = await createApiRequest().post(apiEndpoint, postData);
      setData(response);
      return response.id;
    } catch (errorData) {
      setError(errorData);
    } finally {
      setLoading(false);
    }

    return null;
  }, []);

  return { postRecipient, data, loading, error };
}

export default usePostRecipient;
