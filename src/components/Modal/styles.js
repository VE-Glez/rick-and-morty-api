import styled from 'styled-components';

export const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  backdrop-filter: blur(8px);
`;

export const ModalContent = styled.section`
  background-color: white;
  color: black;
  width: 50%;
  height: 50%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-content: center;
  gap: 1.25em;
  border-radius: 2em;
  padding: 2em;
`;

export const Title = styled.h2`
  font-size: 1.25em;
  margin: 0;
  grid-column: span 2;
`;

export const ModalButton = styled.button`
  background-color: ${({ type }) =>
    type === 'continue' ? '#67bf4e' : 'crimson'};
  color: white;
  border: none;
  border-radius: 1.25em;
  padding: 0.75em;
`;
