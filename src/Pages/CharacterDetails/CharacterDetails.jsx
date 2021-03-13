import { useEffect, useState } from "react";

const useFetchData = (characterID) => {
  const [character, setCharacter] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${characterID}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("useEffect leugo del fetch, el data", data);
        setCharacter(data);
        setLoading(false);
      });
  }, []);

  return {
    character,
    loading,
  };
};

const CharacterDetails = (props) => {
  const characterID = props.match.params.id;
  const { character, loading } = useFetchData(characterID);
  console.log(
    "RENDER characer details id",
    Object.entries(props).map((item) => `prop: ${item[0]}, value: ${item[1]}`)
  );
  console.log("match", props.match.params);

  console.log(character);

  if (loading) return <h1>Loadings...</h1>;
  return (
    <div>
      <img src={character.image} alt={character.name}></img>

      <div>
        <h3>{character.name}</h3>
        <p>Status: {character.status}</p>
        <p>Gender: {character.gender}</p>
        <ul>
          Episodes:
          {character.episode.map((episode) => {
            return <li>{episode}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default CharacterDetails;
