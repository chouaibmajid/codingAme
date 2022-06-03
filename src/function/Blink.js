import React, { useState, useEffect } from "react";

function Blink({ children }) {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const inter = setInterval(() => {
      setVisible((visible) => !visible);
    }, 1000);
    return () => clearInterval(inter);
  }, [visible]);
  return (
    <span style={{ visibility: visible ? "visible" : "hidden" }}>
      {children}
    </span>
  );
}

export default Blink
