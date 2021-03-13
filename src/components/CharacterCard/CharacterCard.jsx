import { useTheme } from "../../context/ThemeContext";
import { Article, LINK } from "./styles";

const CharacterCard = ({ click, myFavorites, myCharacter }) => {
  const { theme } = useTheme();
  const { image, name, status, specie, gender, id } = myCharacter;
  return (
    <Article theme={theme}>
      <header>
        <picture>
          <img src={image} alt={name} />
        </picture>
        <h3>{name}</h3>
      </header>
      <section className="cardBody">
        <p className="status">Status: {status}</p>
        <p>Especie: {specie}</p>
        <p>Género: {gender}</p>
      </section>
      <button onClick={() => click(myCharacter)}>
        {myFavorites.includes(myCharacter) ? "Remove from " : "Add to"}{" "}
        favorites
      </button>
      <LINK to={`/characterDetails/${id}`}>More details</LINK>
    </Article>
  );
};

export default CharacterCard;
