import { FavoritesContainer } from "./styles";
import { useState, useEffect } from "react";
import FavoriteCharacter from "../FavoriteCharacter/FavoriteCharacter";
const FavoritesSection = ({ listOfFavorites }) => {
  const [active, setActive] = useState({});

  useEffect(() => {
    setActive(listOfFavorites[0] || {});
  }, [listOfFavorites]);

  
  return (
    <FavoritesContainer id="contendedorFavoritos">
      <h3>Lista de favoritos</h3>
      {listOfFavorites.map((favorite, index, thisArray) => (
        <FavoriteCharacter
          favorite={favorite}
          active={active}
          thisArray={thisArray}
          index={index}
          callback={setActive}
        />
      ))}
    </FavoritesContainer>
  );
};

export default FavoritesSection;
