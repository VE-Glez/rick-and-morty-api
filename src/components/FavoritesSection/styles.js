import styled from "styled-components";

export const FavoritesContainer = styled.section`
  height: 220px;
  padding: 15px;
  box-shadow: 0 0 4px rgba(45, 85, 180, 0.5);
  margin: 10px 0;
  overflow-x: scroll;
  display: flex;
  background-color: inherit;
  &::-webkit-scrollbar {
    visibility: hidden;
  }

  h3 {
    text-align: left;
  }
  img {
    width: 80px;
    border-radius: 40px;
  }
`;
