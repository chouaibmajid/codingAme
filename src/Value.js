// React 16.x code​​​​​​‌​​‌‌​​​​​​‌​​​​‌​‌​‌‌‌‌‌ below
import React, { useState } from "react";

function Child({ value, setValue }) {
  function handleChange(event) {
    setValue(event.target.value);
  }

  return (
    <div>
      <input id="input" value={value} onChange={handleChange} />
    </div>
  );
}

function Parent({ initial }) {
  const [value, setValue] = useState("test");

  return (
    <div>
      <div id="value">{value}</div>
      <Child value={value} setValue={setValue} />
    </div>
  );
}

// Modify this function if you want to change the preview
// It will not be evaluated as part of the assessment
export function Preview() {
  return <Parent initial="test" />;
}

// Do not change
export { Parent, Child };
