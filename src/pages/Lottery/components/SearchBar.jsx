import React, { useState } from "react";
import SearchItem from "./SearchItem";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchText, setSearchText] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const brotherhoods = ["תל אביב", "חיפה", "קרית אונו", "אשדוד", "קרית ביאליק"];

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = (searchText) => {
    const searchResults = [];
    brotherhoods.forEach((brotherhood) => {
      if (brotherhood.includes(searchText)) {
        searchResults.push(brotherhood);
      }
    });
    console.log(searchResults);
    setSearchResult(searchResults);
  };

  return (
    <div>
      <input
      placeholder="אחווה"
      dir="rtl"
        type="text"
        onKeyUp={(e) => {
          handleSearch(e.target.value);
        }}
        onChange={handleInputChange}
        value={searchQuery}
      />
      {searchResult?.map((item) => (
        <SearchItem
          item={item}
          key={item}
          setSearchQuery={setSearchQuery}
          setSearchResult={setSearchResult}
        ></SearchItem>
      ))}
    </div>
  );
};

export default SearchBar;
