import PropTypes from 'prop-types';
import React, { useRef, useEffect } from 'react';

function ModalOutsideClickHandler({ onClose, children }) {
  const modalRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return <div ref={modalRef}>{children}</div>;
}

ModalOutsideClickHandler.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default ModalOutsideClickHandler;
