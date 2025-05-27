import React from "react";

function CameraFeed() {
  return (
    <div>
      <h2>Live CCTV Feed</h2>
      <img src="http://localhost:5001/video_feed" alt="CCTV Stream" />
    </div>
  );
}

export default CameraFeed;
