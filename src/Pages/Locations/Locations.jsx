import { useState, useEffect, useMemo } from "react";

import { useSearchRef } from "../../context/SearchContext";
import { getMoreLocations } from "../../utils/getMoreLocation";
import {Card, Container, Tag} from './styles'

const Locations = () => {
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
      <Container>
        <h2>Lista de todas las dimensiones conocidas</h2>
        {filteredUsers.map((myLoc) => (
          <Card key={myLoc.id} to={`/locations/${myLoc.id}`}>
            {/* <p>Lugar #{myLoc.id}</p> */}
            <p><Tag>{myLoc.name}</Tag></p>
            <p><Tag>Type:</Tag> {myLoc.type}</p>
            <p><Tag>Dimension:</Tag> {myLoc.dimension}</p>
          </Card>
        ))}
      </Container>
      <div id="loadMore"></div>
    </>
  );
};

export default Locations;
