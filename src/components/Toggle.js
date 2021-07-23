import React, { useState } from "react";

function Toggle() {
  const [isOn, setIsOn] = useState(false);

  function handleClick() {
    setIsOn((isOn) => !isOn);
  }

  const bgColor = isOn ? "red" : "white";
  
  return <button style={{background: bgColor}} onClick={handleClick}>{ isOn ? "ON" : "OFF" }</button>;
}

export default Toggle;
