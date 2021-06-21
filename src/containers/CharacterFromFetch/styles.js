import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Card = styled.article`
  width: 150px;
  height: 150px;
  border: 1px solid ${({ theme }) => theme.fg};
  display: inline-block;
  position: relative;
  background: url(${({ src }) => src}) no-repeat;
  background-size: contain;
  border-radius: 1em;
  overflow: hidden;

  &:hover div,
  &:focus div {
    top: 0;
  }

  &:hover a,
  &:focus a {
    display: inline-block;
  }
`;

export const Details = styled.div`
  position: absolute;
  margin: 0;
  bottom: 0;
  width: 100%;
  background: ${({ theme }) => theme.header};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 1.2em;
  color: ${({ theme }) => theme.fg};
  text-shadow: 0 0 0.25em ${({ theme }) => theme.fg};
`;

export const Button = styled(Link)`
  display: none;
  background-color: ${({ theme }) => theme.CTA};
  padding: 0.5em;
  border: none;
  border-radius: 1em;
`;
