import styled, { css } from "styled-components";

export const HeaderStyled = styled.header`
  display: flex;
  background-color: inherit;
  flex-direction: row;
  gap: 10px;
  justify-content: space-around;
  align-items: center;
  position: sticky;
  z-index: 200;
  top: 0;
  width: 100%;
  transition: 0.5s;
  ${(props) =>
    props.fixed &&
    css`
      position: fixed;
    `}

  .hamburger-react {
    @media (min-width: 768px) {
      display: none;
    }
  }
`;
