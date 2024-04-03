import thumbnail1 from "../../assets/thumbnail1.png";

import { Link } from "react-router-dom";

import React, { useEffect, useState } from "react";
import "./Reccomeneded.css";
import { API_Key, value_converter } from "../../data";
export const Reccomeneded = ({ categoryId }) => {
  const [apiData, setApiData] = useState([]);

  const fetchData = async () => {
    let url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${categoryId}&key=${API_Key}`;

    await fetch(url)
      .then((res) => res.json())
      .then((data) => setApiData(data.items));
    console.log("apiData=" + apiData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="reccomended">
      {apiData.map((item, index) => {
        return (
          <Link
            to={`/video/c${item.snippet.categoryId}/${item.id}`}
            key={index}
            className="side-video-list"
          >
            <img src={item.snippet.thumbnails.medium.url} alt="" />
            <div className="vid-info">
              <h4>{item.snippet.title}</h4>
              <p>{item.snippet.channelTitle}</p>
              <p>{value_converter(item.statistics.viewCount)} views</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
