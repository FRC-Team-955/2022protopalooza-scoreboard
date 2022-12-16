import "../styles/board.css";
import "../styles/roller.css";
import { useState, useEffect } from "react";
import FieldDisplay from "../components/field-display";

function Board() {
  const [score, setScore] = useState(0);
  const [scoreArr, setScoreArr] = useState([]);
  const [dataArr, setDataArr] = useState([]);
  const [state, setState] = useState(0);
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
      setScoreArr(newValue.split(","));
    }
    if (key === "dataArr") {
      setDataArr(newValue.split(","));
    }
  };

  return (
    <div id="board">
      {dataArr[4] == 0 ? (
        <>
          <div id="team-name">{dataArr[1]}</div>
          <div id="score-holder">
            <div>
              <p>Score</p>
              <div className="outerBoarder">
                <div className="innerBoarder">{score}</div>
              </div>
            </div>

            <div>
              <p>Time</p>
              <div className="outerBoarder" id="time">
                <div
                  className="innerBoarder"
                  style={{ color: dataArr[3] == 0 ? "#9c0812" : "black" }}
                >
                  {(dataArr[3] - (dataArr[3] % 60)) / 60}:
                  {dataArr[3] % 60 < 10
                    ? "0" + (dataArr[3] % 60)
                    : dataArr[3] % 60}
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              marginTop: "50px",
            }}
          >
            <div>
              <span
                style={{
                  fontFamily: "Orbitron",
                  fontSize: "40px",
                  color: "white",
                }}
              >
                Top
              </span>
              <span
                style={{
                  fontFamily: "Orbitron",
                  fontSize: "40px",
                  color: "white",
                  float: "right",
                }}
              >
                Bottom
              </span>
              <div id="score-diagram">
                <div id="diagram-left">
                  {parseInt(scoreArr[4]) + parseInt(scoreArr[5])}
                  <div>
                    {parseInt(scoreArr[2]) + parseInt(scoreArr[3])}
                    <div style={{ paddingRight: "10px" }}>
                      {parseInt(scoreArr[0]) + parseInt(scoreArr[1])}
                    </div>
                  </div>
                </div>
                <div id="black-strip"></div>
                <div id="diagram-right">
                  {parseInt(scoreArr[10]) + parseInt(scoreArr[11])}
                  <div>
                    {parseInt(scoreArr[8]) + parseInt(scoreArr[9])}
                    <div style={{ paddingLeft: "10px" }}>
                      {parseInt(scoreArr[6]) + parseInt(scoreArr[7])}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <FieldDisplay scoreArr={scoreArr} />
          </div>
        </>
      ) : (
        <></>
      )}
      {dataArr[4] == 1 ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
          }}
        >
          <h1
            style={{
              fontFamily: "Orbitron",
              fontSize: "90px",
              color: "white",
              marginRight: "50px",
            }}
          >
            Calculating Score
          </h1>
          <div className="lds-roller" style={{ scale: "150%" }}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      ) : (
        <></>
      )}
      {dataArr[4] == 3 ? (
        <div>
          <h1 className="title">
            CV Robotics <br /> Protopalooza
          </h1>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Board;
