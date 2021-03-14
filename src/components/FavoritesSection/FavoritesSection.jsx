import { FavoritesContainer, Card } from "./styles";
import { useState, useEffect } from "react";
import MinimalCard from "../MinimalCard/MinimalCard";
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
        <MinimalCard
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
