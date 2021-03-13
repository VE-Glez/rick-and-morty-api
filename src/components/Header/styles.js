import styled, { css } from "styled-components";

import { Link } from "react-router-dom";
export const HeaderStyled = styled.header`
  display: flex;
  background-color: inherit;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
  position: relative;
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
    align-self: flex-end;
    position: absolute;
    top: -75px;
  }
`;

export const Nav = styled.nav`
  width: 100%;
  background-color: rgba(255, 255, 255, 0.5);
  display: ${({ toggled }) => (toggled ? "flex" : "none")};
  flex-direction: column;
  gap: 20px;
  justify-content: space-evenly;
  align-items: center;
  position: absolute;
  top: 100%;
  left: 0;
  right: 50px;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  } ;
`;

export const NavItem = styled(Link)`
  text-decoration: none;
  padding: 2px;
  line-height: 33px;
  border-radius: 4px;
  width: 100%;
  background: rgba(180, 75, 100, 0.8);

  @media (min-width: 768px) {
    max-width: 120px;
  }
`;

export const Label = styled.label`
  font-style: italic;

  select {
    outline: none;
    border: none;
  }
`;
