import { useState, useEffect } from "react";
import { useAPI } from "../context/APIContext";

//uso doble igual porque estoy entregando un string y la api su ID es de tipo numero
const request = (dataArray, id)=> dataArray.filter(data => data.id == id)


const useFetchData = (parameter, ID) => {
  const [result, setResult] = useState({data: {}, loading: true});
  const {episodes, setEpisodes, locations, setLocations, characters, setCharacters} = useAPI()

  const getRequest = {
    episode: () => request(episodes, ID),
    character: () => request(characters, ID),
    location: () => request(locations, ID),
  }
  
  const updateState = {
    episode: (x) => {
      let id = x.id
      let exist = episodes.filter(ep => ep.id == id).length > 0
      console.log("nuevo agregado a episodios: ", x, "actuales: ", episodes)
      if(!exist) setEpisodes(pv=> [...pv, x])
    },
    character: (x) => {
      let id = x.id
      let exist = characters.filter(ep => ep.id == id).length > 0
      if(!exist) setCharacters(pv=> [...pv, x])
    },
    location: (x) => {
      let id = x.id
      let exist = locations.filter(ep => ep.id == id).length > 0
      if(!exist) setLocations(pv=> [...pv, x])
    },
  }

  useEffect(() => {
    const currentRequest = getRequest[parameter]()
    const condition = currentRequest.length > 0

    if(condition) {
      setResult({data: currentRequest[0], loading: false})
    } else {
      fetch(`https://rickandmortyapi.com/api/${parameter}/${ID}`)
        .then((res) => res.json())
        .then((data) => {
          let id = data.id
          let exist = episodes.filter(ep => ep.id == id).length > 0
          if(!exist) updateState[parameter](data)
          setResult({data, loading: false});
        })
        .catch(err => console.log("el fetch ha petado :'v", err.message))
      }
  }, []);
  return {
    result
  };

}

export default useFetchData;
