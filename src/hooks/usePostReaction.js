import apiPost from 'apis/apiPost';

// Github Wiki: API 명세 3-3) 대상에게 리액션 달기
// id: integer required
// 리액션을 달 대상의 id
// emoji: string required
// 이모지 이름.
// isIncrease: boolean required
// 이모지 개수를 늘릴 건지 줄일 건지. isIncrease = true이면 type = ”increase”, isIncrease = false이면 type = “decrease” 입니다.
function usePostRecipient({ id = null, emoji = '', isIncrease = true }) {
  if (id === null) {
    console.log('Error(usePostRecipient): id가 없습니다.');
    return null;
  }

  if (!emoji) {
    console.log('Error(usePostRecipient): emoji가 없습니다.');
    return null;
  }

  const apiEndpoint = `recipients/${id}/reactions`;
  const type = isIncrease ? 'increase' : 'decrease';
  const postData = { emoji, type };

  const { data, loading, error } = apiPost(apiEndpoint, postData);

  return { data, loading, error };
}

export default usePostRecipient;
