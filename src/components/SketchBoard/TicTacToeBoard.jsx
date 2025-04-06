import { use, useEffect, useRef, useState } from "react";
import SketchBox from "../SketchBox/SketchBox";
import "./TicTacToeBoard.css";
import winSound from "../../assets/winsound.wav"; // Add this import

let data = ["", "", "", "", "", "", "", "", ""];

const TicTacToeBoard = ({
  onTurnChange,
  setWinner,
  isResetRequested,
  currentTurn,
  setDraw,
}) => {
  const [count, setCount] = useState(0);
  const [lock, setLock] = useState(false);
  const [isWin, setIsWin] = useState(false);
  const [winColor, setWinColor] = useState("");
  const [winSet, setWinSet] = useState([]);
  const audioRef = useRef(new Audio(winSound));
  useEffect(() => {
    if (isResetRequested) {
      data = ["", "", "", "", "", "", "", "", ""];
      setCount(0);
      setLock(false);
      setDraw(false);
      setIsWin(false);
      setWinColor("");
    }
  }, [isResetRequested]);

  const checkWinner = () => {
    const winningPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let pattern of winningPatterns) {
      const [a, b, c] = pattern;
      if (data[a] && data[a] === data[b] && data[a] === data[c]) {
        setLock(true);
        setWinSet(pattern);
        audioRef.current.play();
        return data[a];
      }
    }
    return null;
  };

  const toggle = (num) => {
    if (lock || data[num] !== "") {
      return;
    }
    if (count % 2 === 0) {
      data[num] = "x";
    } else {
      data[num] = "o";
    }
    onTurnChange(data[num]);
    setCount(count + 1);

    const winner = checkWinner();
    if (winner) {
      setWinner(winner);
      setIsWin(true);
      setWinColor(winner === "x" ? "Red" : "blue");
    } else if (count === 8) {
      setDraw(true);
      setIsWin(false);
    }
  };

  return (
    <div>
      <div className="Row">
        <SketchBox
          value={data[0]}
          onClick={() => toggle(0)}
          currentTurn={currentTurn}
          isWin={winSet.includes(0)}
          wincolor={winColor}
        />
        <SketchBox
          value={data[1]}
          onClick={() => toggle(1)}
          currentTurn={currentTurn}
          isWin={winSet.includes(1)}
          wincolor={winColor}
        />
        <SketchBox
          value={data[2]}
          onClick={() => toggle(2)}
          currentTurn={currentTurn}
          isWin={winSet.includes(2)}
          wincolor={winColor}
        />
      </div>
      <div className="Row">
        <SketchBox
          value={data[3]}
          onClick={() => toggle(3)}
          currentTurn={currentTurn}
          isWin={winSet.includes(3)}
          wincolor={winColor}
        />
        <SketchBox
          value={data[4]}
          onClick={() => toggle(4)}
          currentTurn={currentTurn}
          isWin={winSet.includes(4)}
          wincolor={winColor}
        />
        <SketchBox
          value={data[5]}
          onClick={() => toggle(5)}
          currentTurn={currentTurn}
          isWin={winSet.includes(5)}
          wincolor={winColor}
        />
      </div>
      <div className="Row">
        <SketchBox
          value={data[6]}
          onClick={() => toggle(6)}
          currentTurn={currentTurn}
          isWin={winSet.includes(6)}
          wincolor={winColor}
        />
        <SketchBox
          value={data[7]}
          onClick={() => toggle(7)}
          currentTurn={currentTurn}
          isWin={winSet.includes(7)}
          wincolor={winColor}
        />
        <SketchBox
          value={data[8]}
          onClick={() => toggle(8)}
          currentTurn={currentTurn}
          isWin={winSet.includes(8)}
          wincolor={winColor}
        />
      </div>
    </div>
  );
};

export default TicTacToeBoard;
