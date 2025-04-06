import React, { useEffect, useRef } from "react";
import rough from "roughjs/bundled/rough.esm.js";
import "./ResetButton.css";

const ResetButton = ({ onClick }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = 200;
    canvas.height = 45;
    const rc = rough.canvas(canvas);

    rc.rectangle(1, 1, 190, 40, {
      stroke: "#d1dde8",
      strokeWidth: 2,
      roughness: 2,
      fill: 'transparent',
      fillStyle: 'solid'
    });
  }, []);

  return (
    <div className="reset-button-container">
      <button className="reset-button" onClick={()=>onClick()}>
        <canvas ref={canvasRef} />
        <span className="button-text">Reset Game</span>
      </button>
    </div>
  );
};

export default ResetButton;
