import { createPortal } from 'react-dom';
import { ModalContainer, ModalContent, ModalButton, Title } from './styles';

const Modal = ({ isOpen, handleAction, handleClose }) => {
  const body = document.body;

  if (!isOpen) {
    body.style = {};
    return null;
  } else {
    body.style.overflow = 'hidden';
    body.style.paddingInlineEnd = '-16px';
  }

  return createPortal(
    <ModalContainer>
      <ModalContent>
        <Title>Are you sure you want to remove it from your favorites?</Title>
        <ModalButton type='continue' onClick={handleAction}>
          Remove it!
        </ModalButton>
        <ModalButton type='cancel' onClick={handleClose}>
          Cancel
        </ModalButton>
      </ModalContent>
    </ModalContainer>,
    document.body
  );
};

export default Modal;
