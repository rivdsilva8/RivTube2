import React, { useState } from "react";
import "./NavBar.css";
import menu_icon from "../../assets/menu.png";
import logo from "../../assets/logo.png";
import search_icon from "../../assets/search.png";
import upload_icon from "../../assets/upload.png";
import more_icon from "../../assets/more.png";
import notification_icon from "../../assets/notification.png";
import { Link } from "react-router-dom";

import { API_Key } from "../../data";
import { Navigate } from 'react-router-dom';
import profile_icon from "../../assets/jack.png";
export const NavBar = ({ setSideBar, query, setQuery,videos,setVideos }) => {
 
  const [submitted, setSubmitted] = useState(false);
  const fetchVideos = async () => {
    try {
      // Fetch video IDs
      const searchUrl = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${query}&key=${API_Key}`;
      const searchResponse = await fetch(searchUrl);
      if (!searchResponse.ok) {
        throw new Error("Failed to fetch data from YouTube API");
      }
      const searchData = await searchResponse.json();
      const videoIds = searchData.items.map((item) => item.id.videoId);
  
      // Fetch video details
      const videoDetailsUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2Cstatistics&id=${videoIds.join(",")}&key=${API_Key}`;
      const videoDetailsResponse = await fetch(videoDetailsUrl);
      if (!videoDetailsResponse.ok) {
        throw new Error("Failed to fetch video details from YouTube API");
      }
      const videoDetailsData = await videoDetailsResponse.json();
  
      // Return video details
      return videoDetailsData.items;
    } catch (error) {
      console.error("Error fetching videos:", error);
      return [];
    }
  };

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = async (event) => {
    
    event.preventDefault();
  
    console.log("submitted");
    try {
      const fetchedVideos = await fetchVideos();
      setVideos(fetchedVideos); 
      setSubmitted(true); 
    } catch (error) {
      console.error("Error fetching and updating videos:", error);
    }
  };


  if (submitted) {
    return <Navigate to={`/searchResults/${query}`} />;
  }
  return (
    <nav className="flex-div">
      <div className="nav-left flex-div">
        <img
          className="menu-icon"
          onClick={() => setSideBar((prev) => (prev === false ? true : false))}
          src={menu_icon}
          alt=""
        />
        <Link to="/">
          <img className="logo " src={logo} alt="" />
        </Link>
      </div>
      

      <div className="nav-middle flex-div">
        <div className="search-box flex-div">
        
        <form onSubmit={handleSubmit}>
    <input type="text" value={query} placeholder="search" onChange={handleChange} />
    <button type="submit"><img src={search_icon} alt="" /></button>
       </form>

        </div>
      </div>

      <div className="nav-right flex-div">
        <img src={upload_icon} alt="" />
        <img src={more_icon} alt="" />
        <img src={notification_icon} alt="" />
        <img src={profile_icon} className="usericon" alt="" />
      </div>
    </nav>
  );
};
