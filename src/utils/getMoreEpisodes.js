export const getMoreEpisodes = async (page) => {
  console.log("la pagina que quiero ver ss: ", page)
    let myLocation = await fetch(
      `https://rickandmortyapi.com/api/episode/?page=${page}`
    )
      .then((response) => response.json())
      .then((data) => {
        return data;
      }).catch(err => console.log("something has been wrong", err));
  
    return myLocation.results;
  };