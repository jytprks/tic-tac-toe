import { useState } from "react";
import "./App.css";
import TikTacToe from "./components/TicTacToe/TicTacToe";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <TikTacToe />
    </div>
  );
}

export default App;
