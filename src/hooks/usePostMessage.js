import { useCallback, useState } from 'react';

import createApiRequest from 'apis/createApiRequest';

// Github Wiki: API 명세 2-3) 대상에게 보내는 메세지 생성
// id: integer required
// 메세지를 보낼 대상의 id
// sender: string required
// 메세지를 남긴 사람의 이름.
// profileImageURL: string required
// 메세지가 사용할 프로필 사진에 대한 URL.
// relationship: string (”친구” | “지인” | “동료” | “가족”) required
// 롤링 페이퍼 대상과 메세지를 남기는 사람 사이 관계. ”친구” | “지인” | “동료” | “가족” 중 하나의 값이어야 합니다.
// content: string required
// 메세지 내용.
// font: string ("Noto Sans” | "Pretendard” | "나눔명조” | "나눔손글씨 손편지체”) required
// 메세지가 사용할 폰트. "Noto Sans” | "Pretendard” | "나눔명조” | "나눔손글씨 손편지체” 중 하나의 값이어야 합니다.

const TEAM = process.env.REACT_APP_TEAM;
const RELATIONSHIP_LIST = ['친구', '지인', '동료', '가족'];
const FONT_LIST = ['Noto Sans', 'Pretendard', '나눔명조', '나눔손글씨 손편지체'];

// 입력 값 검증 함수
function validateInput({ id, sender, profileImageURL, relationship, content, font }) {
  if (!id) {
    return 'Error(usePostMessage): id가 없습니다.';
  }

  if (!sender) {
    return 'Error(usePostMessage): sender가 없습니다.';
  }

  if (!profileImageURL) {
    return 'Error(usePostMessage): profileImageURL이 없습니다.';
  }

  if (!RELATIONSHIP_LIST.includes(relationship)) {
    return 'Error(usePostMessage): relationship이 올바르지 않습니다.';
  }

  if (!content) {
    return 'Error(usePostMessage): content가 없습니다.';
  }

  if (!FONT_LIST.includes(font)) {
    return 'Error(usePostMessage): font가 올바르지 않습니다.';
  }

  // 모든 검증을 통과한 경우
  return null;
}

function usePostMessage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const postMessage = useCallback(async ({ id, sender, profileImageURL, relationship, content, font }) => {
    // 에러 처리
    const errorMessage = validateInput({ id, sender, profileImageURL, relationship, content, font });

    if (errorMessage) {
      console.log(errorMessage);
      return { data: null, loading: false, error: errorMessage };
    }

    // api 요청
    const apiEndpoint = `${TEAM}/recipients/${id}/messages/`;
    const postData = { sender, profileImageURL, relationship, content, font };

    try {
      const response = await createApiRequest().post(apiEndpoint, postData);
      setData(response);
    } catch (errorData) {
      setError(errorData);
    } finally {
      setLoading(false);
    }

    return null;
  }, []);

  return { postMessage, data, loading, error };
}

export default usePostMessage;
