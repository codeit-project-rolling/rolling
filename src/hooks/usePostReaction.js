import apiPost from 'apis/apiPost';

// Github Wiki: API 명세 3-3) 대상에게 리액션 달기
// id: integer required
// 리액션을 달 대상의 id
// emoji: string required
// 이모지 이름.
// isIncrease: boolean required
// 이모지 개수를 늘릴 건지 줄일 건지. isIncrease = true이면 type = ”increase”, isIncrease = false이면 type = “decrease” 입니다.

const TEAM = process.env.REACT_APP_TEAM;

// 입력 값 검증 함수
function validateInput({ id, emoji }) {
  if (!id) {
    return 'Error(usePostReaction): id가 없습니다.';
  }

  if (!emoji) {
    return 'Error(usePostReaction): emoji가 없습니다.';
  }

  // 모든 검증을 통과한 경우
  return null;
}

function usePostReaction({ id, emoji, isIncrease }) {
  // 에러 처리
  const errorMessage = validateInput({ id, emoji });

  if (errorMessage) {
    console.log(errorMessage);
    return { data: null, loading: false, error: errorMessage };
  }

  // apiPost
  const apiEndpoint = `${TEAM}/recipients/${id}/reactions/`;
  const type = isIncrease ? 'increase' : 'decrease';
  const postData = { emoji, type };

  const { data, loading, error } = apiPost(apiEndpoint, postData);

  return { data, loading, error };
}

export default usePostReaction;
