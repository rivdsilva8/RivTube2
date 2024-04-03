import React from 'react';
import './SearchedVideos.css';
import { Link } from 'react-router-dom';
import picture1 from '../../assets/thumbnail1.png';

const trimDescription = (description) => {
    // Split the description into words
    const words = description.split(/\s+/);
    
    // Select the first 50 words and join them back together
    const trimmedDescription = words.slice(0, 16).join(' ');

    return trimmedDescription;
};
export const SearchedVideos = ({ videos }) => {
    return (
      <div>
        {videos.map((video, index) => (
          <Link to={`../video/10/${video.id}`} className="search-card" key={index}>
            <img src={video.snippet.thumbnails
.medium.url} alt="" />
            <div className="search-card-details">
              <div className="search-card-title">{video.snippet.title}</div>
              <div className="search-card-info">
                <div className="view-count">{video.statistics.viewCount } views</div>
                <div className="published-time">{video.snippet.publishedAt}</div>
              </div>
              <div className="channel-name">{video.snippet.channelTitle}</div>
              <p className="description">{trimDescription(video.snippet.description)}</p>
            </div>
          </Link>
        ))}
      </div>
    );
  };
  

