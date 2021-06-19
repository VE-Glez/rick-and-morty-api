import styled from "styled-components";
import { useCallback } from "react";
import { useSearchRef } from "../../context/SearchContext";
import { BiSearch } from "react-icons/bi";
const SearchBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 220px;
  height: 30px;
  border-radius: 25px;
  background-color: white;
  padding: 0 5px 0 15px;
  box-shadow: 0 0 2px black;

  input {
    border: none;
    height: 90%;
    outline: none;
  }
  label {
    /* border: 1px solid purple; */
  }
`;

const Search = ({ placeHolder }) => {
  const { searchReference, setSearch, search } = useSearchRef();

  const handleSearch = useCallback(
    () => setSearch(searchReference.current.value),
    [searchReference, setSearch]
  );
  return (
    <SearchBox className="search">
      <input
        type="text"
        ref={searchReference}
        onInput={handleSearch}
        value={search}
        placeholder={placeHolder}
      />
      <label onClick={() => searchReference.current.focus()}>
        <BiSearch />
      </label>
    </SearchBox>
  );
};

export default Search;
