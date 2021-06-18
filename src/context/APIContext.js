import { createContext, useContext, useReducer, useState } from "react";


const APIContext = createContext(null)

const initialState = {
    favorites: [],
};


export const favoriteReducer = (state, action) => {
    switch (action.type) {
      case "TOGGLE_TO_FAVORITES":
        if (state.favorites.includes(action.payload)) {
          return {
            state,
            favorites: state.favorites.filter(
              (value) => value !== action.payload
            ),
          };
        }
        return {
          ...state,
          favorites: [...state.favorites, action.payload],
        };
      default:
        return state;
    }
  };

const APIProvider = ({children}) => {
    const [characters, setCharacters] = useState([])
    const [favorites, dispatch] = useReducer(favoriteReducer, initialState);
    const [episodes, setEpisodes] = useState([])
    const [locations, setLocations] = useState([])

    const state = {
      characters, 
      setCharacters,
      favorites, 
      dispatch,
      episodes, 
      setEpisodes,
      locations, 
      setLocations
    }

    return (
        <APIContext.Provider value={state}>
            {children}
        </APIContext.Provider>
    )
}

export const useAPI = () => useContext(APIContext)

export default APIProvider;