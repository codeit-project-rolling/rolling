/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import downIcon from 'assets/images/arrow_down.svg';
import fileIcon from 'assets/images/fileIcon.svg';
import filetrayIcon from 'assets/images/filetrayIcon.svg';
import happyIcon from 'assets/images/happyIcon.svg';
import homeIcon from 'assets/images/homeIcon.svg';
import menuIcon from 'assets/images/menu.svg';

import stlyle from './SideBar.module.scss';

function SideBar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  // const handleHomeLink = () => {
  //   navigate('/');
  // };
  // const handlePostPageLink = () => {
  //   navigate('/post');
  // };
  const handleCardlistPageLink = () => {
    navigate('/list');
  };
  const handleEditLink = () => {
    navigate('/edit');
  };
  console.log('open', isOpen);

  return (
    <div className={isOpen ? stlyle.expander : stlyle.navbar}>
      <div className={stlyle.nav}>
        <div className={stlyle.navBrand}>
          <img className={stlyle.menuIcon} src={menuIcon} alt="메뉴아이콘" onClick={() => setIsOpen(!isOpen)} />
        </div>
        <div className={stlyle.navListBox}>
          <div className={stlyle.navList} onClick={handleCardlistPageLink}>
            <img className={stlyle.navToggle} src={homeIcon} alt="" />
            HOME
          </div>
          <div className={stlyle.navList} onClick={handleCardlistPageLink}>
            <img className={stlyle.navToggle} src={fileIcon} alt="" />
            CARD LIST
          </div>
          <div className={stlyle.navListDrop}>
            <div className={stlyle.textBox}>
              <img className={stlyle.navToggle} src={filetrayIcon} alt="" />
              POST
            </div>
            <img className={stlyle.downIcon} src={downIcon} alt="" />
            <ul
              className={stlyle.collapseMenu}
              style={{
                border: isOpen ? '1px solid #CCCCCC' : 'none',
                // maxHeight: isOpen ? '300px' : '0',
              }}
            >
              <li>
                <img className={stlyle.MenuToggle} src={happyIcon} alt="" onClick={handleEditLink} />
                나도 써보기
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
