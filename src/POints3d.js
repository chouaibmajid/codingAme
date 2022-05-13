import React from "react";
import Plot from "react-plotly.js";
import data from "./data.json";
/**
 * Create array num length with random values from 0 to mul
 */

/**
 * Main application component
 */
export const funcStart = () => {
  var newArrX = [];
  var newArrY = [];
  var newArrZ = [];
  data["embeddings3D"].forEach((item) => {
    newArrX.push(item[0]);
    newArrY.push(item[1]);
    newArrZ.push(item[2]);
  });
  var newTab = {
    x: newArrX,
    y: newArrY,
    z: newArrZ,
  };
  return newTab;
};
function POints3d() {
  const [x, setX] = React.useState(funcStart()["x"]);
  const [y, setY] = React.useState(funcStart()["y"]);
  const [z, setZ] = React.useState(funcStart()["z"]);
  const [embeddings3D, setEmbeddings3D] = React.useState(data["embeddings3D"]);

  const [newArr, setNewArr] = React.useState([
    {
      x: funcStart()["x"].slice(0, data["pertinent_words"].length),
      y: funcStart()["y"].slice(0, data["pertinent_words"].length),
      z: funcStart()["z"].slice(0, data["pertinent_words"].length),
      mode: "markers",
      type: "scatter3d",
      marker: { size: 8, color: "black", opacity: 0.9 },
      name: "text words",
      hoverinfo: "text",
      hovertext: data["pertinent_words"],
      visible: true,
    },
  ]);
  const newArrFunc = () => {
    if (newArr.length === 1) {
      var newArr2 = [];
      data["topics"].forEach((item, id) => {
        console.log(id);
        var startIndex = data["topics_lexical_fields"][item]["indexes"][0];
        var endIndex = data["topics_lexical_fields"][item]["indexes"][1];
        console.log(item);
        newArr2.push({
          x: x.slice(startIndex, endIndex),
          y: y.slice(startIndex, endIndex),
          z: z.slice(startIndex, endIndex),
          mode: "markers",
          type: "scatter3d",
          marker: { size: 8, opacity: 0.9 },
          name: item,
          hoverinfo: "skip",
        });
      });
      setNewArr([...newArr, ...newArr2]);
    }
  };

  React.useEffect(() => {
    newArrFunc();
  }, []);

  console.log("newArr", newArr);
  if (newArr.length < 4) return <h1>...loading</h1>;
  return (
    <Plot
      data={newArr}
      layout={{
        height: 800,
        width: 1200,
        title: `3D Views`,
      }}
      onRelayout={(figure) => console.log(figure)}
    />
  );
}

export default POints3d;
