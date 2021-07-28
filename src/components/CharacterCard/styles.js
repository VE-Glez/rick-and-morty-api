import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Article = styled.article`
  width: 310px;
  min-height: 225px;
  padding: 10px;
  display: grid;
  gap: 10px 0;
  box-shadow: 0 0 5px;
  background-color: ${({ theme }) => theme.cardBackground};
  grid:
    'header info' auto
    'like more' 29px / 1fr 1fr;
  justify-items: stretch;

  header {
    grid-area: header;
    position: relative;

    img {
      width: 70px;
      border-radius: 35px;
    }
  }

  .cardBody {
    grid-area: info;
    text-align: center;
    background: ${({ theme }) => theme.fg};
    color: ${({ theme }) => theme.bg};
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border-radius: 10px;
  }

  button {
    grid-area: like;
  }
`;

export const LINK = styled(Link)`
  grid-area: more;
  margin: 0 auto;
  padding: 4px;
  width: 75%;
  height: auto;
  color: ${({ theme }) => theme.bg} !important;
  text-decoration: none;
  transition: 0.5s ease-in;
  background-color: ${({ theme }) => theme.CTA};
  border-radius: 5px;
`;
