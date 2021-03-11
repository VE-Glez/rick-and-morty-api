import styled from "styled-components";
import { useState, useCallback } from "react";
import { useSearchRef } from "../../context/SearchContext";
const SearchBox = styled.div`
  position: relative;
  left: 0;
  right: 0;
  margin: 0 auto;
  z-index: 210;
  background-color: inherit;
`;

const Search = () => {
  const { searchReference, search, setSearch } = useSearchRef();

  const handleSearch = useCallback(
    () => setSearch(searchReference.current.value),
    [search]
  );
  return (
    <SearchBox className="search">
      <label>
        {" "}
        Find your favorite character{" "}
        <input
          type="text"
          ref={searchReference}
          value={search}
          onChange={handleSearch}
        />
      </label>
    </SearchBox>
  );
};

export default Search;
