const cities = ['Tokyo', 'London', 'Rome', 'Donlon', 'Kyoto', 'Paris']
function encode(cities){
    citiesModified = cities.map(item => 
   { return item.toLowerCase().split("").sort().join("")}
    )
    
    var newArr = []
    for(let i = 0; i<citiesModified.length ; i++){
        var newArr2 = []
        citiesModified.forEach((item,id) => {
            if(item === citiesModified[i]){
                newArr2.push(cities[id])
            }
        })
        newArr.push(newArr2)
    }
    
    console.log(newArr)
    const newARR3 = newArr.map((item) => {
        return item.join("/")
    })
        console.log(newARR3)

    const filteredArray = newARR3.filter(function(ele , pos){
    return newARR3.indexOf(ele) == pos;
}) 
            console.log(filteredArray)

    
    return filteredArray.map(item => item.split("/"))
}


console.log(encode(cities))