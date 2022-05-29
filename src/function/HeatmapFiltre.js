import React from 'react'

function HeatmapFiltre() {
  const[object,setObject]=React.useState("")
  const[relAbs,setRelAbs]=React.useState("")
  const[minMax,setMinMax]=React.useState("")


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
      var newArr = heatmaps.map(item => {
          return item.name.split("__")[1].split("_").slice(0,2).join("_")
      }) 
      const filteredArray = newArr.filter(function(ele , pos){
    return newArr.indexOf(ele) === pos;
}) 
      return filteredArray
  }
   const generatMinMax = () => {
      var newArr = heatmaps.map(item => {
          return item.name.split("__")[item.name.split("__").length - 1]
      }) 
      const filteredArray = newArr.filter(function(ele , pos){
    return newArr.indexOf(ele) === pos;
}) 
      return filteredArray
  }
   const generatAbsRelat = () => {
      var newArr = heatmaps.map(item => {
          return item.name.split("__")[item.name.split("__").length - 2]
      }) 
      const filteredArray = newArr.filter(function(ele , pos){
    return newArr.indexOf(ele) === pos;
}) 
      return filteredArray
  }
  
console.log(generatPers())
console.log(generatMinMax())
console.log(generatAbsRelat())
  return (
    <div>
HeatmapFiltre
    </div>
  )
}

export default HeatmapFiltre