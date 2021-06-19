import useFetchData from "../../hooks/useFetchData";
import EpisodeCard from "../../components/EpisodeCard/EpisodeCard"

const EpisodeCardFromFetch = ({ episodeID}) => {
  const {result } = useFetchData( "episode", episodeID)

  if (result.loading) return <div>Loading....</div>;

  const data = {
    id: result.data.id,
    name: result.data.name,
    air_date: result.data.air_date,
    episode: result.data.episode
  }

  return (
    <EpisodeCard {...data} />
  );
};

export default EpisodeCardFromFetch;