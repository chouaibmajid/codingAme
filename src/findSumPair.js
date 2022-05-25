const myFunc = (array,num) => {
    var newArr = []
    array.forEach((item,id) => {
        for(let i = 0 ; i < array.length ; i++){
            if(id !== i && item + array[i] == num){
               
                newArr = [...newArr,item,array[i]]
                
            }
                
        }
    })
    return newArr.slice(0,2)
}