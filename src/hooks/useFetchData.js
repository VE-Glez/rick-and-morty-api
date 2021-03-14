import { useState, useEffect } from "react";

const useFetchData = (parameter, ID) => {
  const [character, setCharacter] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/${parameter}/${ID}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("useEffect leugo del fetch, el data", data);
        setCharacter(data);
        setLoading(false);
      });
  }, []);

  return {
    character,
    loading,
  };
};

export default useFetchData;
