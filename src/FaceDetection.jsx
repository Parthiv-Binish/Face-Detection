import React, { useState } from "react";
import axios from "axios";

function FaceDetection() {
  const [faces, setFaces] = useState(0);

  const detectFaces = async () => {
    const response = await axios.get("http://localhost:8000/detect-faces/");
    setFaces(response.data.faces_detected);
  };

  return (
    <div>
      <h2>Face Detection</h2>
      <button onClick={detectFaces}>Detect Faces</button>
      <p>Faces Detected: {faces}</p>
    </div>
  );
}

export default FaceDetection;
