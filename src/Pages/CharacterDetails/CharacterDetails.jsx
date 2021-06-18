import Skeleton from "./Skeleton";
import useFetchData from "../../hooks/useFetchData";
import EpisodeCardFromFetch from "../../containers/EpisodeCardFromFetch/EpisodeCardFromFetch";
import { ListEpisodes, Container } from "./stylesCharacterDetails";

const CharacterDetails = (props) => {
  window.scrollTo(0, 0);
  const characterID = props.match.params.id;
  const { result } = useFetchData("character", characterID);
  
  if (result.loading) return <Skeleton />;
  return (
    <Container>
      <img src={result.data.image} alt={result.data.name}></img>
      <div>
        <h3>{result.data.name}</h3>
        <p>Status: {result.data.status}</p>
        <p>Gender: {result.data.gender}</p>
        <p>Location: {result.data.origin.name}</p>
        <ListEpisodes>
          <h4>Episodes:</h4>
          {result.data.episode.map((url) => {
            let id = url.split("/")
            id = id[id.length - 1]
            return <EpisodeCardFromFetch key={id} episodeID={id} />;
          })}
        </ListEpisodes>
      </div>
    </Container>
  );
};

export default CharacterDetails;
