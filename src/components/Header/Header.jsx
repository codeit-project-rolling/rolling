import LogoImg from '../assets/img/Logo.png';
import HeaderService from './HeaderService';
function Header() {
  return (
    <div className="Header-Container">
      <div>
        <div>
          <img src={LogoImg} alt="LogoImg" />
          <p>Rolling</p>
        </div>
        <button>롤링 페이퍼 만들기</button>
      </div>
      <div className="HeaderService-Conatainer">
        <HeaderService />
      </div>
    </div>
  );
}
export default Header;
