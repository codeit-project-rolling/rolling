import apiGet from 'apis/apiGet';

// background-images 배열 받아오는 함수

function useGetBackgroundImageList() {
  // apiGet
  const apiEndpoint = `background-images/`;

  const { data, loading, error } = apiGet(apiEndpoint);

  return { data, loading, error };
}

export default useGetBackgroundImageList;
