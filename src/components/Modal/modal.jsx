import { useEffect } from 'react';
import { ModalWindow, BackDrop, ButtonClose } from './modal.styled';
import { createPortal } from 'react-dom';
import { AiOutlineCloseCircle } from 'react-icons/ai';
// import PropTypes from 'prop-types';

export const Modal = ({ children, onClose }) => {
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleKeyDown = e => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  const handleOverlayClick = e => {
    if (e.currentTarget !== e.target) {
      onClose();
    }
  };

  return createPortal(
    <BackDrop onClick={handleOverlayClick}>
      <ModalWindow>
        <ButtonClose type="button" onClick={onClose}>
          <AiOutlineCloseCircle size="35" />
        </ButtonClose>
        {children}
      </ModalWindow>
    </BackDrop>,
    document.getElementById('modal-root')
  );
};
