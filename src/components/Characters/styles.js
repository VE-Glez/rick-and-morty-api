import styled from "styled-components";
export const Container = styled.div`
  display: grid;
  width: 100vw;
  place-items: center;
  place-content: center;
  grid-template-columns: repeat(auto-fill, 180px);
  gap: 20px 15px;
  padding-top: 1px;
  overflow-y: scroll;
  box-sizing: border-box;

  article button {
    position: absolute;
    bottom: 0;
    width: 100%;
  }
`;

export const Button = styled.button`
  width: 100px;
  height: 100px;
  padding: 10px;
  margin: 4px 10px;
  border: 2px solid #1ccaff;
  border-radius: 50px;
  background-color: inherit;
  color: inherit;
`;

export const FavoritesSection = styled.section``;
