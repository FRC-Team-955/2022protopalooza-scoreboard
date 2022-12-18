import "../styles/control.css";
import { useState, useEffect } from "react";
import ScoreAdder from "../components/score-adder";
// import startSound from "./autonstart.mp3";

function Control() {
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

  const changeScore = (e) => {
    setScore(e);
    localStorage.setItem("score", e);
  };

  const changeScoreArr = (e) => {
    setScoreArr(e);
    localStorage.setItem("scoreArr", e);
  };

  const changeDataArr = (e) => {
    setDataArr(e);
    localStorage.setItem("dataArr", e);
  };

  const onStorageUpdate = (e) => {
    const { key, newValue } = e;
    if (key === "score") {
      setScore(newValue);
    }
    if (key === "scoreArr") {
      setScoreArr(newValue);
    }
    if (key === "dataArr") {
      setDataArr(newValue);
    }
  };

  const reset = () => {
    setHis(0);
    setHms(0);
    setHos(0);
    setHi(0);
    setHm(0);
    setHo(0);
    setLis(0);
    setLms(0);
    setLos(0);
    setLi(0);
    setLm(0);
    setLo(0);
    setTeamBonus(false);
    setTimeBonus(false);
    setVarietyBonus(0);
    setFouls(0);

    setName("Team Name");
    setTeamNumber(0);

    changeScore(0);
    changeDataArr([1, "Team Name", 0, 150]);
    changeScoreArr([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]);
    setTime(150);
    setStarted(false);
  };

  const [his, setHis] = useState(0);
  const [hms, setHms] = useState(0);
  const [hos, setHos] = useState(0);
  const [hi, setHi] = useState(0);
  const [hm, setHm] = useState(0);
  const [ho, setHo] = useState(0);
  const [lis, setLis] = useState(0);
  const [lms, setLms] = useState(0);
  const [los, setLos] = useState(0);
  const [li, setLi] = useState(0);
  const [lm, setLm] = useState(0);
  const [lo, setLo] = useState(0);
  const [teamBonus, setTeamBonus] = useState(false);
  const [timeBonus, setTimeBonus] = useState(false);
  const [varietyBonus, setVarietyBonus] = useState(0);
  const [fouls, setFouls] = useState(0);

  const [name, setName] = useState("Team Name");
  const [attemptNumber, setAttemptNumber] = useState(0);
  const [teamNumber, setTeamNumber] = useState(0);
  const [dataToSend, setDataToSend] = useState([
    teamNumber,
    name,
    attemptNumber,
  ]);
  const [boardState, setBoardState] = useState(0);

  const [time, setTime] = useState(150);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (time == 0) {
      let sound = new Audio("/buzzer.mp3");
      sound.play();
    }
  }, [time]);

  useEffect(() => {
    let foulScore = 0;
    if (fouls > 2) {
      foulScore = 6 + (fouls - 2) * 5;
    } else {
      foulScore = fouls * 3;
    }

    if (true) {
      changeScore(
        his * 7 +
          hms * 5 +
          hos * 3 +
          hi * 6 +
          hm * 4 +
          ho * 2 +
          lis * 4 +
          lms * 3 +
          los * 2 +
          li * 3 +
          lm * 2 +
          lo * 1 -
          foulScore +
          timeBonus +
          teamBonus +
          varietyBonus * 3
      );
      changeScoreArr([
        hi,
        his,
        hm,
        hms,
        ho,
        hos,
        li,
        lis,
        lm,
        lms,
        lo,
        los,
        varietyBonus,
        fouls,
      ]);
    }
    changeDataArr([...[dataToSend], time, boardState]);
    // changeDataArr([0, 0, 0, time]);
  }, [
    attemptNumber,
    fouls,
    hi,
    his,
    hm,
    hms,
    ho,
    hos,
    li,
    lis,
    lm,
    lms,
    lo,
    los,
    name,
    teamBonus,
    teamNumber,
    time,
    timeBonus,
    varietyBonus,
    started,
    dataToSend,
    boardState,
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (started) {
        setTime((time) => time - 1);
        if (time < 1) {
          setTime(0);
          setStarted(false);
        }
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [started, time]);

  return (
    <div>
      <div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
            value={0}
            checked={boardState == 0 ? true : false}
            onChange={(e) => setBoardState(e.currentTarget.value)}
          />
          <label className="form-check-label">Score Board</label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
            value={1}
            checked={boardState == 1 ? true : false}
            onChange={(e) => setBoardState(e.currentTarget.value)}
          />
          <label className="form-check-label">Calculating Score</label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
            value={2}
            checked={boardState == 2 ? true : false}
            onChange={(e) => setBoardState(e.currentTarget.value)}
          />
          <label className="form-check-label">Final Result</label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
            value={3}
            checked={boardState == 3 ? true : false}
            onChange={(e) => setBoardState(e.currentTarget.value)}
          />
          <label className="form-check-label">Title</label>
        </div>
      </div>
      <div
        style={{
          marginBottom: "25px",
          width: "300px",
          border: "1px solid black",
          borderRadius: "5px",
        }}
      >
        <h5>Match Progress:</h5>
        <h6>Score: {score}</h6>
        <h6>
          Time: {(time - (time % 60)) / 60}:
          {time % 60 < 10 ? "0" + (time % 60) : time % 60}
        </h6>
      </div>
      <div style={{ marginBottom: "25px", width: "600px" }}>
        <h5>Basic Info: </h5>
        <span className="label">Team Name: </span>
        <input
          type="text"
          className="form-control"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button
          className="btn btn-success"
          onClick={() => setDataToSend([teamNumber, name, attemptNumber])}
        >
          Send
        </button>
      </div>
      <div style={{ display: "flex" }}>
        <div style={{ marginRight: "25px" }}>
          <ScoreAdder
            name={"Upper Inner"}
            score={hi}
            setScore={setHi}
            scoreStand={his}
            setScoreStand={setHis}
          />
          <ScoreAdder
            name={"Upper Middle"}
            score={hm}
            setScore={setHm}
            scoreStand={hms}
            setScoreStand={setHms}
          />
          <ScoreAdder
            name={"Upper Outer"}
            score={ho}
            setScore={setHo}
            scoreStand={hos}
            setScoreStand={setHos}
          />
        </div>

        <div>
          <ScoreAdder
            name={"Lower Inner"}
            score={li}
            setScore={setLi}
            scoreStand={lis}
            setScoreStand={setLis}
          />
          <ScoreAdder
            name={"Lower Middle"}
            score={lm}
            setScore={setLm}
            scoreStand={lms}
            setScoreStand={setLms}
          />
          <ScoreAdder
            name={"Lower Outer"}
            score={lo}
            setScore={setLo}
            scoreStand={los}
            setScoreStand={setLos}
          />
        </div>
      </div>

      <div style={{ marginBottom: "25px" }}>
        <h5>Fouls: </h5>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => setFouls(fouls - 1)}
        >
          -
        </button>
        <span className="display">{fouls}</span>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => setFouls(fouls + 1)}
        >
          +
        </button>
      </div>

      <div style={{ marginBottom: "25px" }}>
        <h5>Bonuses: </h5>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            checked={teamBonus}
            onChange={() => setTeamBonus(!teamBonus)}
            id="flexCheckDefault"
          />
          <label className="form-check-label">Teamwork Bonus</label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            checked={timeBonus}
            onChange={() => setTimeBonus(!timeBonus)}
            id="flexCheckDefault"
          />
          <label className="form-check-label">Time Bonus</label>
        </div>
        <span className="label">Variety Bonus: </span>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => setVarietyBonus(varietyBonus - 1)}
        >
          -
        </button>
        <span className="display">{varietyBonus}</span>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => setVarietyBonus(varietyBonus + 1)}
        >
          +
        </button>
      </div>

      <button
        className="btn btn-success"
        onClick={() => {
          setStarted(true);
          let sound = new Audio("/autonstart.mp3");
          sound.play();
        }}
        style={{ marginRight: "10px" }}
      >
        Start
      </button>
      <button className="btn btn-danger" onClick={reset}>
        Reset
      </button>
    </div>
  );
}

export default Control;
