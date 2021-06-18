import { Card } from "./styles";

const EpisodeCard = ({id, name, air_data, episode}) => {
  return (
    <Card key={id} to={`/episodes/${id}`}>
      <p>Episode #{id}</p>
      <p>{name}</p>
      <p>{air_data}</p>
      <p>{episode}</p>
    </Card>
  );
};



export default EpisodeCard;
