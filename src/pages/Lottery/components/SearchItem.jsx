import React from "react";

const SearchItem = ({item, setSearchQuery, setSearchResult}) => {
  const handleClick = (item) => {
    setSearchQuery(item)
    setSearchResult([])
  }  
  return <div className="hover:bg-gray-300 w-[100%] text-right cursor-pointer" onClick={() => handleClick(item)}>{item}</div>;
};

export default SearchItem;
