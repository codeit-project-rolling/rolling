import apiGet from 'apis/apiGet';

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

function useGetRecipient({ id }) {
  // 에러 처리
  const errorMessage = validateInput({ id });

  if (errorMessage) {
    console.log(errorMessage);
    return { data: null, loading: false, error: errorMessage };
  }

  // apiGet
  const apiEndpoint = `recipients/${id}/`;

  const { data, loading, error } = apiGet(apiEndpoint);

  return { data, loading, error };
}

export default useGetRecipient;
