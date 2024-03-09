import PropTypes from 'prop-types';
import { React, useState, useEffect, useRef } from 'react';

import downIcon from 'assets/images/arrow_down.svg';
import upIcon from 'assets/images/arrow_top.svg';

import style from './Dropdown.module.scss';

function Dropdown({ options, onChange }) {
  const [Selected, setSelected] = useState(options[0].name);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  /**
   *  클릭된 요소가 드롭다운 컨테이너 내부에 있는지 여부를 확인합니다.
   * 만약 클릭된 요소가 드롭다운 컨테이너 내부에 없다면 (!dropdownRef.current.contains(event.target)), 즉 드롭다운 컨테이너 이외의 영역을 클릭했다면 드롭다운을 닫습니다.
   */
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  const handleSelect = (option) => {
    setSelected(option.name);
    setIsOpen(false);
    onChange(option.name);
  };

  return (
    <div>
      {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events */}
      <div
        className={style.container}
        onClick={() => setIsOpen(!isOpen)}
        ref={dropdownRef}
        style={isOpen ? { border: '2px solid #222' } : {}}
      >
        <button className={style.button} type="button" value={Selected}>
          {Selected || `Placeholder`}
        </button>
        <img src={isOpen ? upIcon : downIcon} alt="화살표아이콘" />
        <ul
          style={{
            overflow: isOpen ? 'visible' : 'hidden',
            border: isOpen ? '1px solid #CCCCCC' : 'none',
            maxHeight: isOpen ? '500px' : '0',
          }}
        >
          {options.map((option) => (
            // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
            <li className={style.list} key={option.id} onClick={() => handleSelect(option)} onKeyDown={handleSelect}>
              {option.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

Dropdown.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  options: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Dropdown;
