import { useState, useEffect, useMemo } from "react";
import CharacterCard from "../../components/CharacterCard/CharacterCard";
import { Container } from "./styles";
import FavoritesSection from "../../components/FavoritesSection/FavoritesSection";
import { useSearchRef } from "../../context/SearchContext";
import { getMoreCharacters } from "../../utils/getMoreCharacters";
import { useAPI } from "../../context/APIContext";

const Characters = () => {
  const { searchReference } = useSearchRef();
  const search = !searchReference.current
    ? "null"
    : searchReference.current.value;
  const { characters, setCharacters, favorites, dispatch} = useAPI()
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
          getMoreCharacters(page).then((data) =>{
            let newOnes = []
            data.map( character => {
              let id = character.id
              let exists = characters.filter(ep => ep.id == id).length > 0
              if(!exists) {
                newOnes = [...newOnes, character]
              }
            })
            setCharacters((pv) => [...pv, ...newOnes]);
          });
          setPage(page + 1);
        }
      },
      { threshold: 0.1 }
    );
    chargeButton.observe(document.getElementById("loadMore"));

    return () => chargeButton.disconnect();
  }, [page, setCharacters]);

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
