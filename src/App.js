import React from "react";
// import HeatmapFiltre from "./function/HeatmapFiltre";
import POints3d from "./function/POints3d";
import data from "./function/data.json"
function App() {
  const [showGraph, setShowGraph] = React.useState(false);

  return (
    <>
    <div
        style={{ display: "flex", justifyContent: "center", marginTop: "15px" }}
      >
        <button
          onClick={() => setShowGraph(true)}
          style={{
            color: "white",
            backgroundColor: "green",
            padding: "10px",
            fontSize: "15px",
          }}
        >
          show results (Nuage de points)
        </button>
      </div>
      {showGraph && (
        <div>
          <POints3d data={data}/>
        </div>
      )}
    </> 
  );
}

export default App;

      
