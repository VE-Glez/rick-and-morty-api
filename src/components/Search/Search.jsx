import styled from "styled-components";
import { useState } from "react";
const SearchBox = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  margin: 0 auto;
  z-index: 210;
  background-color: inherit;
`;

const Search = ({ searchI, search, hSearch }) => {
  return (
    <SearchBox className="search">
      <label>
        {" "}
        Find your favorite character{" "}
        <input type="text" ref={searchI} value={search} onChange={hSearch} />
      </label>
    </SearchBox>
  );
};

export default Search;
