import styled from "styled-components";

export const FavoritesContainer = styled.section`
  height: 280px;
  padding: 15px;
  box-shadow: 0 0 4px rgba(45, 85, 180, 0.5);
  margin: 10px 0;

  h3 {
    text-align: left;
  }
`;

export const Lista = styled.ul`
  list-style: none;
  gap: 10px;
  display: flex;
  overflow-x: scroll;
  height: 80%;

  li {
    min-width: 150px;
  }
`;
