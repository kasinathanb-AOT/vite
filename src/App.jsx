import { useState } from "react";
import "./App.css";

function App() {
  const [isRecording, setIsRecording] = useState(false);

  const handleStartStop = () => {
    setIsRecording(!isRecording);
  };

  return (
    <div>
      {isRecording ? (
        <button onClick={() => handleStartStop()}>Stop Recording</button>
      ) : (
        <button onClick={() => handleStartStop()}>Start Recording</button>
      )}
    </div>
  );
}

export default App;
