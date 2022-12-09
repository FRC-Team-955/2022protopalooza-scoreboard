function ScoreAdder({ score, setScore, scoreStand, setScoreStand, name }) {
  return (
    <div style={{ marginBottom: "10px" }}>
      <h5>{name}: </h5>
      <span className="label">Standing: </span>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => setScoreStand(scoreStand - 1)}
      >
        -
      </button>
      <span className="display">{scoreStand}</span>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => setScoreStand(scoreStand + 1)}
      >
        +
      </button>
      <span className="label">Not Standing: </span>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => setScore(score - 1)}
      >
        -
      </button>
      <span className="display">{score}</span>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => setScore(score + 1)}
      >
        +
      </button>
    </div>
  );
}

export default ScoreAdder;
