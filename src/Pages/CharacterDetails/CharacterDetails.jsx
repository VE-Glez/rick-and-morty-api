import Skeleton from "./Skeleton";
import useFetchData from "../../hooks/useFetchData";
import EpisodeCard from "../Episodes/EpisodeCard";

const CharacterDetails = (props) => {
  window.scrollTo(0, 0);
  const characterID = props.match.params.id;
  const { character, loading } = useFetchData("character", characterID);
  console.log(
    "RENDER characer details id",
    Object.entries(props).map((item) => `prop: ${item[0]}, value: ${item[1]}`)
  );
  console.log("match", props.match.params);

  console.log(character);

  if (loading) return <Skeleton />;
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
            return <EpisodeCard allURL={episode} />;
          })}
        </ul>
      </div>
    </div>
  );
};

export default CharacterDetails;
