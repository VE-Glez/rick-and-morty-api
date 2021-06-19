import { useState, useEffect, useMemo } from "react";
import { useAPI } from "../../context/APIContext";
import { useSearchRef } from "../../context/SearchContext";
import { getMoreEpisodes } from "../../utils/getMoreEpisodes";
import {  Container } from "./episodeStyles";
import EpisodeCard from "../../components/EpisodeCard/EpisodeCard";


const Episodes = () => {
  const { searchReference } = useSearchRef();
  const search = !searchReference.current
    ? "null"
    : searchReference.current.value;
  const {episodes, setEpisodes} = useAPI()
  const [page, setPage] = useState(1);

  const episodesFilteres = useMemo(
    () =>
      episodes.filter((episodes) =>
        episodes.name.toLowerCase().includes(search.toLowerCase())
      ),
    [episodes, search]
  );

  useEffect(() => {
    let chargeButton = new IntersectionObserver(
      (entries, observer) => {
        if (entries[0].isIntersecting && page < 3) {
          getMoreEpisodes(page).then((data) => {
            let newOnes = []
            data.map( episode => {
              let id = episode.id
              let exists = episodes.filter(ep => ep.id == id).length > 0
              if(!exists) {
                newOnes = [...newOnes, episode]
              }
            })
            setEpisodes((pv) => [...pv, ...newOnes]);
          });
          setPage(pv => pv + 1);
        }
      },
      { threshold: 0.1 }
    );
    chargeButton.observe(document.getElementById("loadMore"));

    return () => chargeButton.disconnect();
  }, [page]);

  return (
    <>
      <Container>
        <h2>Lista completa de episodios</h2>
        {episodesFilteres.map((episode) => {
          return <EpisodeCard key={episode.id} {...episode} />
        }
        )}
      </Container>
      <div id="loadMore"></div>
    </>
  );
};

export default Episodes;
