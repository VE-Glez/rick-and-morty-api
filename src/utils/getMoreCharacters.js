export const getMoreCharacters = async (page) => {
    let myCharacters = await fetch(
      `https://rickandmortyapi.com/api/character/?page=${page}`
    )
      .then((response) => response.json())
      .then((data) => data);
  
    return myCharacters.results;
  };