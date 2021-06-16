import { useState, useReducer, useEffect, useMemo } from "react";

import CharacterCard from "../CharacterCard/CharacterCard";
import { Container } from "./styles";
import FavoritesSection from "../FavoritesSection/FavoritesSection";
import { useSearchRef } from "../../context/SearchContext";

const initialState = {
  favorites: [],
};

const favoriteReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_TO_FAVORITES":
      if (state.favorites.includes(action.payload)) {
        return {
          state,
          favorites: state.favorites.filter(
            (value) => value !== action.payload
          ),
        };
      }
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    default:
      return state;
  }
};

const getMoreCharacters = async (page) => {
  let myCharacters = await fetch(
    `https://rickandmortyapi.com/api/character/?page=${page}`
  )
    .then((response) => response.json())
    .then((data) => data);

  return myCharacters.results;
};

const Characters = () => {
  const [favorites, dispatch] = useReducer(favoriteReducer, initialState);
  const { searchReference } = useSearchRef();
  const search = !searchReference.current
    ? "null"
    : searchReference.current.value;
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);

  const handleClick = (favorite) => {
    dispatch({ type: "TOGGLE_TO_FAVORITES", payload: favorite });
  };

  const filteredUsers = useMemo(
    () =>
      characters.filter((character) =>
        character.name.toLowerCase().includes(search.toLowerCase())
      ),
    [characters, search]
  );

  useEffect(() => {
    let chargeButton = new IntersectionObserver(
      (entries, observer) => {
        if (entries[0].isIntersecting && page < 35) {
          console.log(entries[0].isIntersecting);
          getMoreCharacters(page).then((data) =>
            setCharacters((pv) => [...pv, ...data])
          );
          setPage(page + 1);
        }
      },
      { threshold: 0.1 }
    );
    chargeButton.observe(document.getElementById("loadMore"));

    return () => chargeButton.disconnect();
  }, [page]);
  return (
    <>
      <FavoritesSection
        listOfFavorites={favorites.favorites}
      ></FavoritesSection>
      <Container className="Characters">
        {filteredUsers.map((character) => (
          <CharacterCard
            key={character.id}
            click={handleClick}
            myCharacter={character}
            myFavorites={favorites.favorites}
          ></CharacterCard>
        ))}
        <div id="loadMore"></div>
      </Container>
    </>
  );
};

export default Characters;
