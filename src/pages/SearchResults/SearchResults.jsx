import React, { useState, useEffect } from "react";
import "./SearchResults.css";
import { SideBar } from "../../components/SideBar/SideBar";
import { SearchedVideos } from "../../components/SearchedVideos/SearchedVideos";
import { AdvancedSearch } from "../../components/AdvancedSearch/AdvancedSearch";
import { API_Key } from "../../data";
import filter from "../../assets/filter.png";

export const SearchResults = ({ sidebar,videos }) => {
  const [category, setCategory] = useState(0);
  const [showAdvancedSearch, setShowAdvancedSearch] = useState(false);
  

  const toggleAdvancedSearch = () => {
    setShowAdvancedSearch((prev) => !prev);
  };

  return (
    <div>
      <SideBar
        sidebar={sidebar}
        category={category}
        setCategory={setCategory}
      />
      <div className="container">
        <button className="filter-button" onClick={toggleAdvancedSearch}>
          Filters <img className="filter-img" src={filter} alt="" />
        </button>
        {showAdvancedSearch && <AdvancedSearch onClose={toggleAdvancedSearch} />}
        { videos && <SearchedVideos videos={videos} />}
      </div>
    </div>
  );
};
