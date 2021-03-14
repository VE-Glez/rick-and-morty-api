import useFetchData from "../../hooks/useFetchData";

const EpisodeCard = ({ allURL }) => {
  const splitedUrl = allURL.split("/");
  const { character, loading } = useFetchData(
    "episode",
    splitedUrl[splitedUrl.length - 1]
  );
  if (loading) return <div>Loading....</div>;
  return (
    <article style={{ boxShadow: "0 0 3px rgba(0,0,0,0.5)" }}>
      <h3>{character.name}</h3>
      <p>{character.air_date}</p>
      <p>{character.episode}</p>
    </article>
  );
};

export default EpisodeCard;
