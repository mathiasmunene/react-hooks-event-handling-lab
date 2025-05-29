import React from "react";

function Keypad() {
  function handleChange() {
    console.log("Entering password...");
  }

  return (
    <div>
      <input type="password" onChange={handleChange} id="password-input" />
    </div>
  );
}

export default Keypad;
