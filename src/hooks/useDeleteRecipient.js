import apiDelete from 'apis/apiDelete';

// Github Wiki: API 명세 1-6) 롤링 페이퍼 대상 삭제
// id: integer required
// 삭제할 대상의 id
function useDeleteRecipient({ id = null }) {
  if (id === null) {
    console.log('Error(useDeleteRecipientById): id가 없습니다.');
    return null;
  }

  const apiEndpoint = `recipients/${id}/`;

  const { loading, error } = apiDelete(apiEndpoint);

  return { loading, error };
}

export default useDeleteRecipient;
