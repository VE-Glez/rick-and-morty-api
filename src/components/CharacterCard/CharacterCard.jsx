import { useTheme } from "../../context/ThemeContext";
import { Picture, Article, LINK } from "./styles";

const CharacterCard = ({
  children,
  image,
  name,
  status,
  specie,
  gender,
  id,
}) => {
  const { theme } = useTheme();

  return (
    <Article theme={theme}>
      <header>
        <Picture>
          <img src={image} alt={name} />
        </Picture>
        <h3>{name}</h3>
      </header>
      <div className="cardBody">
        <p className="status">{status}</p>
        <p>{specie}</p>
        <p>{gender}</p>
        <LINK to={`/characterDetails/${id}`}>More details</LINK>
      </div>
      {/* {children} */}
    </Article>
  );
};

export default CharacterCard;
