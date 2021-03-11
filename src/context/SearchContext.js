import { createContext, useContext, useRef, useState } from "react";

const SearchContextRef = createContext(null);

export const useSearchRef = () => {
  return useContext(SearchContextRef);
};

const SearchContext = ({ children }) => {
  const searchReference = useRef(null);
  const [search, setSearch] = useState(" ");
  return (
    <SearchContextRef.Provider value={{ searchReference, search, setSearch }}>
      {children}
    </SearchContextRef.Provider>
  );
};

export default SearchContext;
