import "./TicTacToe.css";
import ResetButton from "../ResetButton/ResetButton";
import TicTacToeBoard from "../SketchBoard/TicTacToeBoard";
import WhosTearn from "../WhosTearn/WhosTearn";
import { use, useEffect, useState } from "react";
import Winner from "../Winner/Winner";

const TicTacToe = () => {
  const [tearn, setTurn] = useState("x");
  const [winner, setWinner] = useState("");
  const [isDraw, setDraw] = useState(false);
  const [isResetRequested, setResetRequested] = useState(false);

  const handleTurnChange = (currentTurn) => {
    setTurn(currentTurn === "x" ? "o" : "x");
  };

  useEffect(() => {
    if (isResetRequested) {
      setWinner("");
      setTurn("x");
      setResetRequested(false);
    }
  }, [isResetRequested]);

  return (
    <div>
      <strong className="subHeading">Welcome to</strong>
      <div>
        <strong className="heading">TicTacToe</strong>
      </div>
      <div className="board">
        <TicTacToeBoard
          onTurnChange={handleTurnChange}
          setWinner={setWinner}
          isResetRequested={isResetRequested}
          currentTurn={tearn}
          setDraw={setDraw}
        />
      </div>
      {isDraw ? (
        "It's a Draw!"
      ) : winner === "" ? (
        <WhosTearn playar={tearn} />
      ) : (
        <Winner playar={winner} />
      )}
      <ResetButton onClick={() => setResetRequested(true)} />
    </div>
  );
};

export default TicTacToe;
