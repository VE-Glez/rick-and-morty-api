import { prettyPrint } from "../../utils/prettyFormat";
import { Card, Tag } from "./styles";

const EpisodeCard = ({id, name, air_date, episode}) => {
  const newFormat = prettyPrint(episode)
  
  return (
    <Card key={id} to={`/episodes/${id}`}>
      <p><Tag>Season: </Tag>{newFormat[0]} <Tag>Episode: </Tag>{newFormat[1]}</p>
      <p><Tag>{name}</Tag></p>
      <p><Tag>On air: </Tag>{air_date}</p>
    </Card>
  );
};



export default EpisodeCard;
