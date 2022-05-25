import React from "react";

function HeatmapFiltre() {
  const [object, setObject] = React.useState("");
  const [relAbs, setRelAbs] = React.useState("");
  const [minMax, setMinMax] = React.useState("");
  console.log(object);
  const heatmaps = [
    {
      name: "Autruche__ostrich_1_ostrich__VGG16__size_50__stride_50__padding_1__color_viridis__normalized__absolute__min",
    },
    {
      name: "Autruche__ostrich_1_ostrich__VGG16__size_50__stride_50__padding_1__color_viridis__normalized__absolute__max",
    },
    {
      name: "Autruche__ostrich_2_ostrich__VGG16__size_50__stride_50__padding_1__color_viridis__normalized__relative__min",
    },
    {
      name: "Autruche__ostrich_3_ostrich__VGG16__size_50__stride_50__padding_1__color_viridis__normalized__relative__max",
    },
    {
      name: "Autruche__ostrich_1_ostrich__VGG16__size_50__stride_50__padding_1__color_viridis__normalized__absolute__min",
    },
    {
      name: "Autruche__ostrich_2_ostrich__VGG16__size_50__stride_50__padding_1__color_viridis__normalized__absolute__max",
    },
    {
      name: "Autruche__ostrich_3_ostrich__VGG16__size_50__stride_50__padding_1__color_viridis__normalized__relative__min",
    },
    {
      name: "Autruche__ostrich_1_ostrich__VGG16__size_50__stride_50__padding_1__color_viridis__normalized__relative__min",
    },
    {
      name: "Autruche__ostrich_2_ostrich__VGG16__size_50__stride_50__padding_1__color_viridis__normalized__absolute__max",
    },
    {
      name: "Autruche__ostrich_3_ostrich__VGG16__size_50__stride_50__padding_1__color_viridis__normalized__absolute__min",
    },
    {
      name: "Autruche__ostrich_1_ostrich__VGG16__size_50__stride_50__padding_1__color_viridis__normalized__relative__max",
    },
    {
      name: "Autruche__ostrich_2_ostrich__VGG16__size_50__stride_50__padding_1__color_viridis__normalized__relative__min",
    },
    {
      name: "Autruche__ostrich_3_ostrich__VGG16__size_50__stride_50__padding_1__color_viridis__normalized__absolute__max",
    },
    {
      name: "Autruche__ostrich_1_ostrich__VGG16__size_50__stride_50__padding_1__color_viridis__normalized__absolute__min",
    },
    {
      name: "Autruche__ostrich_2_ostrich__VGG16__size_50__stride_50__padding_1__color_viridis__normalized__relative__max",
    },
    {
      name: "Autruche__ostrich_1_ostrich__VGG16__size_50__stride_50__padding_1__color_viridis__normalized__absolute__max",
    },
    {
      name: "Autruche__ostrich_3_ostrich__VGG16__size_50__stride_50__padding_1__color_viridis__normalized__relative__min",
    },
    {
      name: "Autruche__ostrich_1_ostrich__VGG16__size_50__stride_50__padding_1__color_viridis__normalized__absolute__max",
    },
    {
      name: "Autruche__ostrich_2_ostrich__VGG16__size_50__stride_50__padding_1__color_viridis__normalized__relative__min",
    },
  ];

  const generatPers = () => {
    var newArr = heatmaps.map((item) => {
      return item.name.split("__")[1].split("_").slice(0, 2).join("_");
    });
    const filteredArray = newArr.filter(function (ele, pos) {
      return newArr.indexOf(ele) === pos;
    });
    return filteredArray;
  };
  const generatMinMax = () => {
    var newArr = heatmaps.map((item) => {
      return item.name.split("__")[item.name.split("__").length - 1];
    });
    const filteredArray = newArr.filter(function (ele, pos) {
      return newArr.indexOf(ele) === pos;
    });
    return filteredArray;
  };
  const generatAbsRelat = () => {
    var newArr = heatmaps.map((item) => {
      return item.name.split("__")[item.name.split("__").length - 2];
    });
    const filteredArray = newArr.filter(function (ele, pos) {
      return newArr.indexOf(ele) === pos;
    });
    return filteredArray;
  };
  ///////////////////////
  const myFuncFiltre = () => {
    // var filtredbyObj = [];
    // if (!object) {
    //   filtredbyObj = heatmaps;
    // } else {
    //   filtredbyObj = heatmaps.filter((item) => item.name.includes(object));
    // }
    // var filtredbyRelAbs = [];
    // if (!relAbs) {
    //   filtredbyRelAbs = filtredbyObj;
    // } else {
    //   filtredbyRelAbs = filtredbyObj.filter((item) =>
    //     item.name.includes(relAbs)
    //   );
    // }
    // var filtredbyMaxMin = [];
    // if (!minMax) {
    //   filtredbyMaxMin = filtredbyRelAbs;
    // } else {
    //   filtredbyMaxMin = filtredbyRelAbs.filter((item) =>
    //     item.name.includes(minMax)
    //   );
    // }
    //  
    var filteredArray = heatmaps.filter(item => item.name.includes(relAbs) && item.name.includes(object) && item.name.includes(minMax) )

    return filteredArray;
  };
  ///////////////////
  return (
    <div>
      HeatmapFiltre
      <select onChange={(e) => setObject(e.target.value)} value={object}>
        <option value="">All</option>
        {generatPers().map((item) => (
          <option value={item}>{item} </option>
        ))}
      </select>
      <select onChange={(e) => setMinMax(e.target.value)} value={minMax}>
        <option value="">All</option>
        {generatMinMax().map((item) => (
          <option value={item}>{item} </option>
        ))}
      </select>
      <select onChange={(e) => setRelAbs(e.target.value)} value={relAbs}>
        <option value="">All</option>
        {generatAbsRelat().map((item) => (
          <option value={item}>{item} </option>
        ))}
      </select>
      {myFuncFiltre().map((item) => (
        <h3>{item.name} </h3>
      ))}
    </div>
  );
}

export default HeatmapFiltre;
