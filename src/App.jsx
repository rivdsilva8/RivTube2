import React, { useState } from "react";
import { NavBar } from "./components/NavBar/NavBar";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Video } from "./pages/Video/Video";
import { SearchResults } from "./pages/SearchResults/SearchResults";
import { API_Key } from "./data";
export default function App() {
  const [sidebar, setSideBar] = useState("true");
  const [query,setQuery] =useState('');
  const [videos, setVideos] = useState([]);
  
   

  return (
    <div>
      <NavBar setSideBar={setSideBar} query={query} setQuery={setQuery} videos={videos} setVideos={setVideos}/>
      <Routes>
        <Route path="/" element={<Home sidebar={sidebar}  />} />
        <Route path='/searchResults/:query' element={<SearchResults videos={videos} setVideos={setVideos}sidebar={sidebar}setSideBar={setSideBar} query={query} setQuery={setQuery} />}/>
        <Route path="/video/:categoryId/:videoId" element={<Video />}  />
      </Routes>
    </div>
  );
}
