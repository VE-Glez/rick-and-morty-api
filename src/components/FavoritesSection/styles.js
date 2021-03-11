import styled from "styled-components";

const shBorder = "2px";
const shSpread = "5px";

export const FavoritesContainer = styled.section`
  height: 220px;
  border: 1px solid blue;
  padding: 15px;
  box-shadow: 0 0 4px rgba(45, 85, 180, 0.5);
  margin: 10px 0;
  overflow-x: scroll;
  display: flex;
  /* gap: 10px; */
  /* background-color: rgba(200, 200, 200, 0.4); */
  background-color: inherit;

  h3 {
    text-align: left;
  }
  img {
    width: 80px;
    border-radius: 40px;
  }
`;

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
