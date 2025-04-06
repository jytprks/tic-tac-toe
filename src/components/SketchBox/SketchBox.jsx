import React, { useEffect, useRef } from "react";
import rough from "roughjs/bundled/rough.esm.js";
import cross_light from "../../assets/x_light.png";
import circle_light from "../../assets/Subtract.png";
import tacSound from "../../assets/tac-sound.mp3";  // Add your sound file
import "./SketchBox.css";

const SketchBox = ({ value, onClick, currentTurn, wincolor, isWin }) => {
  const canvasRef = useRef(null);
  const audioRef = useRef(new Audio(tacSound));

  const handleClick = (e) => {
    if (!value) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
    onClick(e);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = 95;
    canvas.height = 95;
    const rc = rough.canvas(canvas);
    
    // Clear the canvas before redrawing
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    rc.rectangle(1, 1, 90, 90, {
      stroke: "#d1dde8",
      strokeWidth: 1,
      roughness: 2.8,
      fill: wincolor || 'transparent',
      hachureGap: isWin ? 8 : 0,
    });
  }, [wincolor, isWin]);

  return (
    <div className="box" onClick={handleClick}>
      <canvas ref={canvasRef} className="box-canvas" />
      {value ? (
        <img
          src={value === "x" ? cross_light : circle_light}
          alt={value.toUpperCase()}
          className="box-image"
        />
      ) : (
        <img
          src={currentTurn === "x" ? cross_light : circle_light}
          alt={currentTurn.toUpperCase()}
          className="box-image hover-image"
        />
      )}
    </div>
  );
};

export default SketchBox;
