import "../styles/board.css";
import { useState, useEffect } from "react";

function Board() {
  const [score, setScore] = useState(0);
  useEffect(() => {
    setScore(localStorage.getItem("score") || 0);
    window.addEventListener("storage", onStorageUpdate);
    return () => {
      window.removeEventListener("storage", onStorageUpdate);
    };
  }, []);
  const onStorageUpdate = (e) => {
    const { key, newValue } = e;
    if (key === "score") {
      setScore(newValue);
    }
  };

  return (
    <div id="board-flex">
      <div id="board">
        <div id="top">
          <div id="score" className="big-num">
            {score}
          </div>
          <div id="time" className="big-num">
            2:15
          </div>
        </div>
        <div id="bottom"></div>
      </div>
    </div>
  );
}

export default Board;
