import styled from "styled-components";
import { useTheme } from "../context/ThemeContext";
const Article = styled.article`
  max-width: 250px;
  box-shadow: -2px 0 5px rgba(21, 140, 187, 0.35);
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
      /* bottom: 0; */
      text-align: center;
      /* filter: opacity(0.9); */
    }
  }
`;

const Picture = styled.picture`
  img {
    width: 70%;
    border-radius: 50%;
  }
`;

const CharacterCard = ({ children, image, name, status, specie, gender }) => {
  const { theme } = useTheme();
  return (
    <Article theme={theme}>
      <header>
        <Picture>
          <img src={image} alt={name} />
        </Picture>
        <h2>{name}</h2>
      </header>
      <div className="cardBody">
        <p className="status">{status}</p>
        <p>{specie}</p>
        <p>{gender}</p>
      </div>
      {children}
    </Article>
  );
};

export default CharacterCard;
