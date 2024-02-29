import apiPost from 'apis/apiPost';

// Github Wiki: API 명세 2-3) 대상에게 보내는 메세지 생성
// id: integer required
// 메세지를 보낼 대상의 id
// sender: string required
// 메세지를 남긴 사람의 이름.
// profileImageURL: string required
// 메세지가 사용할 프로필 사진에 대한 URL.
// relationship: string (”친구” | “지인” | “동료” | “가족”) required
// 롤링 페이퍼 대상과 메세지를 남기는 사람 사이 관계. ”친구” | “지인” | “동료” | “가족” 중 하나의 값이어야 합니다.
// content: string required
// 메세지 내용.
// font: string ("Noto Sans” | "Pretendard” | "나눔명조” | "나눔손글씨 손편지체”) required
// 메세지가 사용할 폰트. "Noto Sans” | "Pretendard” | "나눔명조” | "나눔손글씨 손편지체” 중 하나의 값이어야 합니다.
function usePostMessage({ id = null, sender = '', profileImageURL = '', relationship = '', content = '', font = '' }) {
  if (id === null) {
    console.log('Error(usePostMessage): id가 없습니다.');
    return null;
  }

  if (!sender) {
    console.log('Error(usePostMessage): sender가 없습니다.');
    return null;
  }

  if (!profileImageURL) {
    console.log('Error(usePostMessage): profileImageURL이 없습니다.');
    return null;
  }

  if (!relationship) {
    console.log('Error(usePostMessage): relationship이 없습니다.');
    return null;
  }

  if (relationship !== '친구' && relationship !== '지인' && relationship !== '동료' && relationship !== '가족') {
    console.log('Error(usePostMessage): relationship이 올바르지 않습니다.');
    return null;
  }

  if (!content) {
    console.log('Error(usePostMessage): content가 없습니다.');
    return null;
  }

  if (!font) {
    console.log('Error(usePostMessage): font가 없습니다.');
    return null;
  }

  if (font !== 'Noto Sans' && font !== 'Pretendard' && font !== '나눔명조' && font !== '나눔손글씨 손편지체') {
    console.log('Error(usePostMessage): font가 올바르지 않습니다.');
    return null;
  }

  const apiEndpoint = `recipients/${id}/messages/`;
  const postData = { sender, profileImageURL, relationship, content, font };

  const { data, loading, error } = apiPost(apiEndpoint, postData);

  return { data, loading, error };
}

export default usePostMessage;
