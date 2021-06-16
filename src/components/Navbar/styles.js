import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  width: 100%;
  background-color: inherit;
  display: ${({ toggled }) => (toggled ? "flex" : "none")};
  flex-direction: column;
  gap: 5px;
  justify-content: space-evenly;
  align-items: center;
  position: absolute;
  top: 100%;
  height: auto;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    position: relative;
    background-color: initial;
    opacity: 1;
  } ;
`;

export const NavItem = styled(Link)`
  text-decoration: none;
  padding: 2px;
  line-height: 33px;
  border-radius: 4px;
  width: 100%;
  background: ${({theme}) => theme.cardBackground};
  color: inherit;
  font-size: 1.6rem;

  &:hover,
  &:visited {
    color: inherit;
  }

  @media (min-width: 768px) {
    max-width: 120px;
  }
`;


