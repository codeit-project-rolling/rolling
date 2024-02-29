import apiPost from 'apis/apiPost';

// Github Wiki: API 명세 1-3) 롤링 페이퍼 대상 생성
// name: string required
// 롤링 페이퍼 대상의 이름.
// backgroundColor: string required
// 롤링 페이퍼 대상 게시글이 사용할 배경색. “beige” | “purple” | “blue” | “green” 중 하나의 값을 사용해야 합니다.
function usePostRecipient({ name = '', backgroundColor = '' }) {
  if (!name) {
    console.log('Error(usePostRecipient): name이 없습니다.');
    return null;
  }

  if (!backgroundColor) {
    console.log('Error(usePostRecipient): backgroundColor가 없습니다.');
    return null;
  }

  if (
    backgroundColor !== 'beige' &&
    backgroundColor !== 'purple' &&
    backgroundColor !== 'blue' &&
    backgroundColor !== 'green'
  ) {
    console.log('Error(usePostRecipient): backgroundColor가 올바르지 않습니다.');
    return null;
  }

  const apiEndpoint = 'recipients/';
  const postData = { name, backgroundColor };

  const { data, loading, error } = apiPost(apiEndpoint, postData);

  return { data, loading, error };
}

export default usePostRecipient;
