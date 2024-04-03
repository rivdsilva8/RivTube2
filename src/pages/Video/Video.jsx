import React from "react";
import "./Video.css";
import { PlayVideo } from "../../components/PlayVideo/PlayVideo";
import { Reccomeneded } from "../../components/Reccomended/Reccomeneded";
import { useParams } from "react-router-dom";
export const Video = () => {
  const { videoId, categoryId } = useParams();
  return (
    <div className="play-container">
      <PlayVideo videoId={videoId} />
      <Reccomeneded categoryId={categoryId} />
    </div>
  );
};
