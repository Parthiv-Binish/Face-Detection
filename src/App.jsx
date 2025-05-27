import React from "react";
import CameraFeed from "./CameraFeed";
import FaceDetection from "./FaceDetection";

function App() {
  return (
    <div>
      <h1>AI Assistant</h1>
      <CameraFeed />
      <FaceDetection />
    </div>
  );
}

export default App;
