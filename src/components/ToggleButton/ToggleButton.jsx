import React, { useState } from 'react';

import styles from 'components/ToggleButton/ToggleButton.module.scss';

function ToggleButton() {
  const [ColorSelected, setColorSelected] = useState(true);

  const handleButtonClick = (isColor) => {
    if (isColor) {
      setColorSelected(true);
    } else {
      setColorSelected(false);
    }
  };

  return (
    <div className={styles.toggleButtonBackground}>
      <button
        type="button"
        className={ColorSelected ? styles.selectedButton : styles.unSelectedButton}
        onClick={() => handleButtonClick(true)}
      >
        <p>컬러</p>
      </button>
      <button
        type="button"
        className={!ColorSelected ? styles.selectedButton : styles.unSelectedButton}
        onClick={() => handleButtonClick(false)}
      >
        <p>이미지</p>
      </button>
    </div>
  );
}

export default ToggleButton;
