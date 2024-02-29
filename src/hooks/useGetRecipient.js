import apiGet from 'apis/apiGet';

// Github Wiki: API 명세 1-5) 롤링 페이퍼 대상 조회
// id: integer required
// 조회할 대상의 id
function useGetRecipient({ id = null }) {
  if (id === null) {
    console.log('Error(useGetRecipient): id가 없습니다.');
    return null;
  }

  const apiEndpoint = `recipients/${id}/`;

  const { data, loading, error } = apiGet(apiEndpoint);

  return { data, loading, error };
}

export default useGetRecipient;
