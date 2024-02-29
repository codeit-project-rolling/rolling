import apiGet from 'apis/apiGet';

// Github Wiki: API 명세 2-4) 대상에게 보낸 메세지 목록 조회
// id: integer required
// 삭제할 대상의 id
// limit: integer
// 리턴받기 원하는 질문 대상 객체 수. 값을 전달하지 않으면 8개의 객체가 리턴됩니다.
// offset: integer
// 가장 앞 객체부터 건너뛰고 싶은 객체 수. 값을 전달하지 않으면 건너뛰지 않습니다.

// 입력 값 검증 함수
function validateInput({ id }) {
  if (!id) {
    return 'Error(useGetMessageList): id가 없습니다.';
  }

  // 모든 검증을 통과한 경우
  return null;
}

function useGetMessageList({ id, limit, offset }) {
  // 에러 처리
  const errorMessage = validateInput({ id });

  if (errorMessage) {
    console.log(errorMessage);
    return { data: null, loading: false, error: errorMessage };
  }

  // apiGet
  // URLSearchParams 사용
  const queryParams = new URLSearchParams();

  if (limit) queryParams.append('limit', limit);
  if (offset) queryParams.append('offset', offset);

  const queryString = queryParams.toString();
  const apiEndpoint = `recipients/${id}/messages/${queryString ? `?${queryString}` : ''}/`;

  const { data, loading, error } = apiGet(apiEndpoint);

  return { data, loading, error };
}

export default useGetMessageList;
