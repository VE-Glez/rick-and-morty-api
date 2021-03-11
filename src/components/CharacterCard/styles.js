import styled from "styled-components";

export const Article = styled.article`
  max-width: 250px;
  min-width: 200px;
  height: 250px;
  box-shadow: 0 0 5px #1ccaff;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow-y: hidden;

  .cardBody {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    top: -100%;
    width: 100%;
    transition: 0.5s ease all;

    p:hover {
      color: ${(props) => props.theme.bg};
    }
  }

  &:hover {
    .cardBody {
      color: ${(props) => props.theme.bg};
      background-color: ${(props) => props.theme.fg};
      top: 0;
      text-align: center;
    }
  }
`;

export const Picture = styled.picture`
  img {
    width: 70%;
    border-radius: 50%;
  }
`;
