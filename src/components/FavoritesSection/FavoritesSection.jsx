import { FavoritesContainer, Card } from "./styles";
import { useState, useEffect, useRef } from "react";
const FavoritesSection = ({ listOfFavorites }) => {
  const [active, setActive] = useState(0);
  const [intersections, setIntersections] = useState([]);
  const tarjetas = useRef(new Array());
  const contenedorTarjetas = document.querySelector(".contendedorFavoritos");

  console.log("tamaño favoritos", listOfFavorites.length);
  console.log(
    "mi ref actual es FUERA eFFECT",
    tarjetas.current.forEach((e) =>
      !e ? "null" : console.log("classname: ", e.className)
    )
  );

  useEffect(() => {
    console.log("mi ref contenderod", contenedorTarjetas);
    const observador = new IntersectionObserver(
      (entries) => console.log(entries[0].boundingClientRect),
      {
        threshold: 1,
        root: contenedorTarjetas,
      }
    );
    console.log("ref current", tarjetas.current);
    listOfFavorites.length && observador.observe(tarjetas.current);
  }, [tarjetas]);

  return (
    <FavoritesContainer id="contendedorFavoritos">
      <h3>Lista de favoritos</h3>
      {listOfFavorites.map((favorite, index) => (
        <Card
          key={favorite.id}
          ref={(favorite) => tarjetas.current.push(favorite)}
          className={`${
            favorite.id === active
              ? "isActive"
              : active > favorite.id
              ? "isRight"
              : "isLeft"
          }
            `}
          key={favorite.id}
          onClick={() => setActive(favorite.id)}
        >
          <img src={favorite.image} alt={favorite.name} />
          <h4>{favorite.name}</h4>
        </Card>
      ))}
    </FavoritesContainer>
  );
};

export default FavoritesSection;
