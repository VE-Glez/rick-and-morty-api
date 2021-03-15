import { useState, useEffect, useMemo } from "react";
import { useSearchRef } from "../../context/SearchContext";
const getMoreLocations = async (page) => {
  let myLocation = await fetch(
    `https://rickandmortyapi.com/api/episode/?page=${page}`
  )
    .then((response) => response.json())
    .then((data) => {
      return data;
    });

  return myLocation.results;
};

const Episodes = () => {
  const { searchReference } = useSearchRef();
  const search = !searchReference.current
    ? "null"
    : searchReference.current.value;
  const [locations, seLocations] = useState([]);
  const [page, setPage] = useState(1);
  const filteredUsers = useMemo(
    () =>
      locations.filter((locations) =>
        locations.name.toLowerCase().includes(search.toLowerCase())
      ),
    [locations, search]
  );

  useEffect(() => {
    let chargeButton = new IntersectionObserver(
      (entries, observer) => {
        if (entries[0].isIntersecting && page < 6) {
          console.log(entries[0].isIntersecting);
          getMoreLocations(page).then((data) => {
            return seLocations((pv) => [...pv, ...data]);
          });
          setPage(page + 1);
        }
      },
      { threshold: 0.1 }
    );
    chargeButton.observe(document.getElementById("loadMore"));

    return () => chargeButton.disconnect();
  }, [page]);

  return (
    <>
      <div>
        <h2>Página de las dimensiones existentes conocidas filtered</h2>
        {filteredUsers.map((myLoc) => (
          <div key={myLoc.id} style={{ border: "1px solid purple" }}>
            <p>Episode #{myLoc.id}</p>
            <p>{myLoc.name}</p>
            <p>{myLoc.air_data}</p>
            <p>{myLoc.episode}</p>
          </div>
        ))}
      </div>
      <div id="loadMore"></div>
    </>
  );
};

export default Episodes;
