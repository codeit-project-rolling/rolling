import shareIcon from '../../assets/img/share.png';
import addEmojiIcon from '../../assets/img/addEmoji.png';
import arrowDownIcon from '../../assets/img/arrow_down.png';

function HeaderService() {
  return (
    <div>
      <p>To. Ashely Kim</p>
      <div>
        <div>
          <p>N명이 작성했어요!</p>
        </div>
        <div>
          <button></button>
          <button></button>
          <button></button>
          <img src={arrowDownIcon} alt="arrowDownIcon" />
        </div>
        <div>
          <button>
            <img src={addEmojiIcon} alt="addEmojiIcon" />
            <p>추가</p>
          </button>
        </div>
        <div>
          <button>
            <img src={shareIcon} alt="shareImg" />
          </button>
        </div>
      </div>
    </div>
  );
}
export default HeaderService;
