const Search = ({ searchI, search, hSearch }) => {
  return (
    <div className="search">
      <input type="text" ref={searchI} value={search} onChange={hSearch} />
    </div>
  );
};

export default Search;
