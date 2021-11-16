import React from "react";
import ReactPlayer from "react-player/lazy";

const Video: React.FC = () => {
  return (
    <>
      <div className="player-wrapper">
        <ReactPlayer
          width="100%"
          height="100%"
          className="react-player"
          url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
        />
      </div>
    </>
  );
};

export default Video;
