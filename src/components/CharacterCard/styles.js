import styled from "styled-components";
import { Link } from "react-router-dom";

export const Article = styled.article`
  width: 310px;
  min-height: 225px;
  padding: 10px;
  display: grid;
  gap: 10px 0;
  box-shadow: 0 0 5px;
  grid:
    "header info" auto
    "like more" 29px / 1fr 1fr;
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
  color: inherit;
  text-decoration: none;
  border: 1px solid ${({ theme }) => theme.fg};
  transition: 0.5s ease-in;

  &:hover {
    background-color: rgba(25, 85, 200, 0.8);
  }
`;
