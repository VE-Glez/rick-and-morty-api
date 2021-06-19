import styled from "styled-components";
import {Link} from 'react-router-dom'
const shBorder = "2px";
const shSpread = "5px";

export const Card = styled.article`
  background-color: rgba(0, 0, 0, 0.1);
  filter: blur(0.9);

  margin: 0 -25px;
  min-width: 120px;
  max-width: 120px;
  position: relative;
  border-radius: 20px;
  box-shadow: inset ${shBorder} ${shBorder} ${shSpread} rgba(0, 0, 0, 0.8),
    inset -${shBorder} -${shBorder} ${shSpread} rgba(255, 255, 255, 0.8),
    ${shBorder} ${shBorder} ${shSpread} rgba(0, 0, 0, 0.1),
    -${shBorder} -${shBorder} ${shSpread} rgba(255, 255, 255, 0.8);
  transition: 0.45s;

  &.isRight {
    transform: rotateY(70deg);
  }
  &.isLeft {
    transform: rotateY(-70deg);
  }

  &:hover,
  &.isActive {
    transform: rotateY(0);
    margin: 0 20px;
  }
`;

export const Button = styled(Link)`
  width: 100%;
  padding: 0.35em 0;
  color: ${({theme}) => theme.bg};
  background: ${({theme}) => theme.fg};
  text-transform: uppercase;
  text-decoration:none;
  font-weight: bold;
  display: inline-flex;

`