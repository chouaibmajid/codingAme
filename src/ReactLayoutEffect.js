import React from "react";
import { useLayoutEffect } from "react/cjs/react.production.min";

function ReactLayoutEffect() {
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    console.log("effect");
    setCount(1);
  }, []);
  React.useLayoutEffect(() => {
    console.log(" layout effect");
  });
  return <div>{count}</div>;
}

export default ReactLayoutEffect;
