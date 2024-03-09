import React, { useEffect } from "react";
import { useState } from "react";

const RandomColor = () => {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  

  function randomNum(length) {
    return Math.floor(Math.random() * length);
  }

  function handleCreateHexColor() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexNumber = "#";
    for (let i = 0; i < 6; i++) {
      hexNumber += hex[randomNum(hex.length)];
    }
    setColor(hexNumber);
  }

  function handleCreateRGBColor() {
    let r = randomNum(256);
    let g = randomNum(256);
    let b = randomNum(256);

    setColor(`rgb(${r},${g},${b})`);
  }

  useEffect(()=>{
    if(typeOfColor==="hex") handleCreateHexColor();
    else handleCreateRGBColor();
  },[typeOfColor])


  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: color,
      }}
    >
      <button
        onClick={() => {
          setTypeOfColor("hex")
        }}
      >
        Create Hex Color
      </button>
      <button
        onClick={() => {
          setTypeOfColor("rgb")
        }}
      >
        Create RGB Color
      </button>
      <button
        onClick={
          typeOfColor === "hex" ? handleCreateHexColor : handleCreateRGBColor  
        }
      >
        Select Random Color
      </button>

    <div style={{color:'white',
    }}>
       <div>{typeOfColor==='hex'?<h3>hex color</h3>:<h3>RGB color</h3>}</div> 
       <div>{color}</div> 
    </div>
    </div>
  );
};

export default RandomColor;
