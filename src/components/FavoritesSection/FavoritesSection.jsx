import { FavoritesContainer, Card } from "./styles";
import { useState, useEffect, useRef } from "react";
const FavoritesSection = ({ listOfFavorites }) => {
  const [active, setActive] = useState(listOfFavorites[-1] || {});
  console.log("render Favorites and active is:", active.id);
  console.log(`index of ${listOfFavorites.indexOf(active)}`);
  return (
    <FavoritesContainer id="contendedorFavoritos">
      <h3>Lista de favoritos</h3>
      {listOfFavorites.map((favorite, index, thisArray) => (
        <Card
          key={favorite.id}
          className={
            favorite.id === active.id
              ? "isActive"
              : thisArray.indexOf(active) < index
              ? "isRight"
              : "isLeft"
          }
          key={favorite.id}
          onClick={() => setActive(favorite)}
        >
          <img src={favorite.image} alt={favorite.name} />
          <h4>{favorite.name}</h4>
          <p>Favorite ID: {favorite.id}</p>
        </Card>
      ))}
    </FavoritesContainer>
  );
};

export default FavoritesSection;
