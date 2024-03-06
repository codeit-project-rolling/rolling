// 날짜 데이터를 다음과 같은 형식으로 변환하는 함수
// dateString: 2023-11-01T08:05:25.399056Z -> formatDate: 2023.11.01
function formatDate(dateString) {
  const date = new Date(dateString);

  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // getMonth()는 0부터 시작하기 때문에 +1
  const day = date.getDate().toString().padStart(2, '0');

  const formattedDate = `${year}.${month}.${day}`;

  return formattedDate;
}

export default formatDate;
