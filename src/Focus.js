import React, { useRef } from "react";

// Fix the code​​​​​​‌​​‌‌​​​​​​‌​​​​‌​‌​‌‌‌‌‌ below
function InputWithFocusButton() {
  const textInput = useRef(null);

  function handleClick() {
    textInput.current.focus();
  }
  return (
    <div>
      <input type="text" ref={textInput} />
      <button onClick={handleClick}>Focus input field</button>
    </div>
  );
}

// Modify this function if you want to change the preview
// It will not be evaluated as part of the assessment
export function Preview() {
  return <InputWithFocusButton />;
}

// Do not change
export default InputWithFocusButton;
