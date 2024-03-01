import apiDelete from 'apis/apiDelete';

// Github Wiki: API 명세 1-6) 롤링 페이퍼 대상 삭제
// id: integer required
// 삭제할 대상의 id

// 입력 값 검증 함수
function validateInput({ id }) {
  if (!id) {
    return 'Error(useDeleteRecipientById): id가 없습니다.';
  }

  // 모든 검증을 통과한 경우
  return null;
}

function useDeleteRecipient({ id } = {}) {
  // 에러 처리
  const errorMessage = validateInput({ id });

  if (errorMessage) {
    console.log(errorMessage);
    return { loading: false, error: errorMessage };
  }

  // apiDelete
  const apiEndpoint = `recipients/${id}/`;

  const { loading, error } = apiDelete(apiEndpoint);

  return { loading, error };
}

export default useDeleteRecipient;