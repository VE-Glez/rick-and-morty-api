export const getMoreLocations = async (page) => {
    let myLocation = await fetch(
      `https://rickandmortyapi.com/api/location/?page=${page}`
    )
      .then((response) => response.json())
      .then((data) => {
        return data;
      });
  
    return myLocation.results;
  };

