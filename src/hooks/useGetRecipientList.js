import apiGet from 'apis/apiGet';

// Github Wiki: API 명세 1-4) 롤링 페이퍼 대상 목록 조회
// limit: integer
// 리턴받기 원하는 질문 대상 객체 수. 값을 전달하지 않으면 8개의 객체가 리턴됩니다.
// offset: integer
// 가장 앞 객체부터 건너뛰고 싶은 객체 수. 값을 전달하지 않으면 건너뛰지 않습니다.
// sortByLike: boolean
// 객체 목록 정렬 기준. "like" 를 전달하면 목록이 총 리액션 수 (reactionCount) 순서대로 목록이 정렬돼서 리턴됩니다. 값을 전달하지 않으면 최신순으로 정렬됩니다. sortByLike = true 이면 "like"를 전달합니다.

const TEAM = process.env.REACT_APP_TEAM;

function useGetRecipientList({ limit, offset, sortByLike } = {}) {
  // apiGet
  // URLSearchParams 사용
  const queryParams = new URLSearchParams();

  if (limit) queryParams.append('limit', limit);
  if (offset) queryParams.append('offset', offset);
  if (sortByLike) queryParams.append('sort', 'like');

  const queryString = queryParams.toString();
  const apiEndpoint = `${TEAM}/recipients/${queryString ? `?${queryString}` : ''}`;

  const { data, loading, error } = apiGet(apiEndpoint);

  return { data, loading, error };
}

export default useGetRecipientList;
