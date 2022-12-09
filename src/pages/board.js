import "../styles/board.css";
import { useState, useEffect } from "react";

function Board() {
  const [score, setScore] = useState(0);
  const [scoreArr, setScoreArr] = useState([]);
  const [dataArr, setDataArr] = useState([]);
  useEffect(() => {
    setScore(localStorage.getItem("score") || 0);
    setScoreArr(localStorage.getItem("scoreArr") || []);
    setDataArr(localStorage.getItem("dataArr") || []);
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
    if (key === "scoreArr") {
      setScoreArr(newValue);
    }
    if (key === "dataArr") {
      setDataArr(newValue.split(','));
    }
  };
  let name = "Team Name"

  return (
    <div id="board">
      <div id="team-name">{name}</div>
      <div id="score-holder">
        <div>
          <p>Score</p>
          <div className="outerBoarder">
            <div className="innerBoarder">
              {score}
            </div>
          </div>
        </div>
        
        <div>
          <p>Time</p>
          <div className="outerBoarder" id="time">
          <div className="innerBoarder">
            {(dataArr[3] - (dataArr[3] % 60)) / 60}:
            {dataArr[3] % 60 < 10 ? "0" + (dataArr[3] % 60) : dataArr[3] % 60}
          </div>
        </div>
        </div>
        
      </div>
      {/* <div id="board">
        <div id="top">
          <div id="score" className="big-num">
            {score}
          </div>
          <div id="time" className="big-num">
            2:15
          </div>
        </div>
        <div id="bottom"></div>
      </div> */}
    </div>
  );
}

export default Board;
