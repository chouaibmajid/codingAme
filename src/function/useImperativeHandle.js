import React, { useImperativeHandle, useRef } from "react";

function Mycomp(ref) {
  const inputRef = useRef();
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    },
  }));
  return <div>Mycomp</div>;
}

export default Mycomp;
