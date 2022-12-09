import "./styles/App.css";
import Board from "./pages/board";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Control from "./pages/control";
import { useState } from "react";

function App() {
  const [score, setScore] = useState(0);
  const [scoreArr, setScoreArr] = useState([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]);

  function updateScore() {
    // let upperScore =
    //   points[0] * 7 +
    //   points[1] * 5 +
    //   points[2] * 3 +
    //   points[3] * 6 +
    //   points[4] * 4 +
    //   points[5] * 2;
    // let lowerScore =
    //   points[6] * 4 +
    //   points[7] * 3 +
    //   points[8] * 2 +
    //   points[9] * 3 +
    //   points[10] * 2 +
    //   points[11] * 1;
    // setScore(upperScore + lowerScore + points[12] + points[13]);
    setScore(5);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/control" element={<Control />} />
        <Route path="/" element={<Board />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
