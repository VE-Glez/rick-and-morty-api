import { FavoritesContainer, Card } from "./styles";
import { useState, useEffect } from "react";
const FavoritesSection = ({ listOfFavorites }) => {
  const [active, setActive] = useState({});
  const [contador, setContador] = useState(0);
  console.log(`initial state es ${listOfFavorites[0]}`);
  console.log("render Favorites and active is:", active.id);

  useEffect(() => {
    setActive(listOfFavorites[0] || {});
    console.log("entrando al efecto al iniciar el render");
    setContador((pv) => pv + 1);
    console.log("el numero de renders han sido: ", contador);
  }, []);

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
