import apiDelete from 'apis/apiDelete';

// Github Wiki: API 명세 2-5) 메세지 삭제
// id: integer required
// 삭제할 메세지의 id
function useDeleteMessage({ id = null }) {
  if (id === null) {
    console.log('Error(useDeleteMessage): id가 없습니다.');
    return null;
  }

  const apiEndpoint = `messages/${id}/`;

  const { loading, error } = apiDelete(apiEndpoint);

  return { loading, error };
}

export default useDeleteMessage;
