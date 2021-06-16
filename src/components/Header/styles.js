import styled from "styled-components";

export const HeaderStyled = styled.header`
  display: flex;
  background-color: ${({theme}) => theme.header};
  flex-direction: row;
  gap: 10px;
  justify-content: space-around;
  align-items: center;
  position: sticky;
  z-index: 200;
  top: 0;
  width: 100%;
  transition: 0.5s;
  

  .hamburger-react {
    @media (min-width: 768px) {
      display: none;
    }
  }
`;
