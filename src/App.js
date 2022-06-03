import React from "react";
import HeatmapFiltre from "./HeatmapFiltre";

function App() {
  // const [showGraph, setShowGraph] = React.useState(false);

  return (
    <>
    <HeatmapFiltre />
    </>
  );
}

export default App;

      {/* <div
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
    </> */}
