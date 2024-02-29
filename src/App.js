import './App.scss';

import HeaderLayout from 'components/Header/HeaderLayout';

// import Badge from 'components/Badge/Badge';
// import BadgeEmoji from 'components/BadgeEmoji/BadgeEmoji';
// import Modal from 'components/Modal/Modal';
// import Toast from 'components/Toast/Toast';


function App() {
  return (
    <div className="App">
      <HeaderLayout />
    </div>
  );

  // Badge, BadgeEmoji, Modal, Toast 테스트용 코드
  // // 임시 데이터 객체
  // const message = {
  //   id: 32,
  //   recipientId: 2,
  //   sender: '김하은',
  //   profileImageURL: 'https://fastly.picsum.photos/id/311/200/200.jpg?hmac=CHiYGYQ3Xpesshw5eYWH7U0Kyl9zMTZLQuRDU4OtyH8',
  //   relationship: '가족',
  //   content: '열심히 일하는 모습 멋있습니다.',
  //   font: 'Pretendard',
  //   createdAt: '2023-11-01T08:05:25.399056Z',
  // };
  //
  // return (
  //   <div className="App">
  //     <Badge relationship="지인" />
  //     <Badge relationship="동료" />
  //     <Badge relationship="가족" />
  //     <Badge relationship="친구" />
  //     <BadgeEmoji emoji="😀" count={14} />
  //     <Toast />
  //     <Modal message={message} />
  //   </div>
  // );
}

export default App;
