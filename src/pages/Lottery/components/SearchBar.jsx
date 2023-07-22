import React, { useMemo, useState } from "react";
import SearchItem from "./SearchItem";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [items, setItems] = useState(["תל אביב", "חיפה", "קרית אונו", "אשדוד", "קרית ביאליק"]);


  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };


  const filterItems =  useMemo(() => {items.filter(item => {
  return  item.toLowerCase().includes(query.toLowerCase())})}, [items, query])

  return (
    <div>
      <input
      value={query}
        placeholder="אחווה"
        dir="rtl"
        type="search"
        onChange={handleInputChange}
      />
      {filterItems?.map((item) => (
        <div>{item}</div>
      ))}
    </div>
  );
};

export default SearchBar;
