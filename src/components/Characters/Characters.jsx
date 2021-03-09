import {
  useState,
  useReducer,
  useEffect,
  useMemo,
  useRef,
  useCallback,
} from "react";
import CharacterCard from "../CharacterCard/CharacterCard";
import { Container, Button } from "./styles";
import Search from "../Search/Search";
import FavoriteSection from "../FavoritesSection/FavoritesSection";

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
  const [search, setSearch] = useState("");
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const searchInput = useRef(null);
  const containerRef = useRef(null);

  const handleClick = (favorite) => {
    dispatch({ type: "TOGGLE_TO_FAVORITES", payload: favorite });
  };

  const handleSearch = useCallback(
    () => setSearch(searchInput.current.value),
    []
  );

  const filteredUsers = useMemo(
    () =>
      characters.filter((character) =>
        character.name.toLowerCase().includes(search.toLowerCase())
      ),
    [characters, search]
  );

  // const handlePage = useCallback(
  //   (next) => {
  //     console.log(`next its ${next}`);
  //     console.log(searchInput);

  //     if (next === "next") {
  //       setPage(page + 1);
  //     } else {
  //       setPage(page - 1);
  //     }
  //     console.log(`la page es ${page}`);
  //   },
  //   [page]
  // );

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
      { threshold: 1 }
    );
    chargeButton.observe(document.getElementById("test"));

    return () => chargeButton.disconnect();
  }, [page]);

  return (
    <>
      <Search searchI={searchInput} search={search} hSearch={handleSearch} />
      <FavoriteSection>
        {favorites.favorites.map((favorite) => (
          <li key={favorite.id}>{favorite.name}</li>
        ))}
      </FavoriteSection>
      <Container className="Characters" ref={containerRef}>
        {filteredUsers.map((character) => (
          <CharacterCard
            key={character.id}
            name={character.name}
            specie={character.species}
            gender={character.gender}
            image={character.image}
            status={character.status}
          >
            <button onClick={() => handleClick(character)}>
              {favorites.favorites.includes(character)
                ? "Remove from "
                : "Add to"}{" "}
              favorites
            </button>
          </CharacterCard>
        ))}
      </Container>
      <div id="test"></div>
      {/* {page > 1 && <Button onClick={handlePage}>Prev. Page</Button>}
      {page < 34 && (
        <Button onClick={() => handlePage("next")}> Next Page</Button>
      )} */}
    </>
  );
};

export default Characters;
