import { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";

const CharacterDetails = (props) => {
  const [character, setCharacter] = useState({});
  const characterID = props.match.params.id;
  console.log(
    "RENDER characer details id",
    Object.entries(props).map((item) => `prop: ${item[0]}, value: ${item[1]}`)
  );

  useEffect(() => {
    try {
      fecthCharacter();
    } catch (error) {
      console.log(error);
      <Redirect to="/notfound" />;
    }
  }, []);

  const fecthCharacter = async () => {
    const fetchData = await fetch(
      `https://rickandmortyapi.com/api/character/${characterID}`
    );
    const jsonData = await fetchData.json();

    setCharacter(jsonData);
  };

  const proper = Object.entries(props);
  return (
    <div>
      <p>{character.name}</p>
      <img src={character.image}></img>

      <div>
        <p>Los props son </p>
      </div>
    </div>
  );
};

export default CharacterDetails;
