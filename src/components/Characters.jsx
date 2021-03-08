import {
  useState,
  useReducer,
  useEffect,
  useMemo,
  useRef,
  useCallback,
} from "react";
import CharacterCard from "./CharacterCard";
import styled from "styled-components";
import Search from "./Search";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  margin: 10px;

  @media screen and (min-width: 900px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const Button = styled.button`
  width: 100px;
  height: 100px;
  padding: 10px;
  margin: 4px 10px;
  border: 2px solid #1ccaff;
  border-radius: 50px;
  background-color: inherit;
  color: inherit;
`;

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

const Characters = () => {
  const [favorites, dispatch] = useReducer(favoriteReducer, initialState);
  const [search, setSearch] = useState("");
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const searchInput = useRef(null);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
      .then((response) => response.json())
      .then((data) => setCharacters(data.results));
  }, [page]);

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

  const handlePage = (next) => {
    console.log(`next its ${next}`);
    if (next === "next") {
      setPage(page + 1);
    } else {
      setPage(page - 1);
    }
    console.log(`la page es ${page}`);
  };
  return (
    <>
      <Search searchI={searchInput} search={search} hSearch={handleSearch} />
      <ul>
        {favorites.favorites.map((favorite) => (
          <li key={favorite.id}>{favorite.name}</li>
        ))}
      </ul>

      <Container className="Characters">
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
      {page > 1 && <Button onClick={handlePage}>Prev. Page</Button>}
      {page < 34 && (
        <Button onClick={() => handlePage("next")}> Next Page</Button>
      )}
    </>
  );
};

export default Characters;
