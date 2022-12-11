function FieldDisplay({ scoreArr }) {
  return (
    <div style={{ fontFamily: "Orbitron", fontSize: "40px", color: "white" }}>
      <div
        style={{
          display: "flex",
          marginBottom: "10px",
        }}
      >
        Bonuses
        <div
          style={{
            fontFamily: "Zen Dots",
            fontSize: "60px",
            backgroundColor: "white",
            width: "70px",
            height: "70px",
            lineHeight: "72px",
            textAlign: "center",
            borderRadius: "7px",
            marginLeft: "10px",
            color: "black",
          }}
        >
          {scoreArr[12]}
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "right" }}>
        Fouls
        <div
          style={{
            fontFamily: "Zen Dots",
            fontSize: "60px",
            backgroundColor: "white",
            width: "70px",
            height: "70px",
            lineHeight: "72px",
            textAlign: "center",
            borderRadius: "7px",
            marginLeft: "10px",
            color: "black",
          }}
        >
          {scoreArr[13]}
        </div>
      </div>
    </div>
  );
}

export default FieldDisplay;
