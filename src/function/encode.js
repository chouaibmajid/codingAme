function encode(str) {
    var messageTab = str.toLowerCase().split("").sort()
    console.log(messageTab)
    const newArr = []
    do{
        for(let i =0; i<messageTab.length ; i++){
            var ind = 0;
            // eslint-disable-next-line no-loop-func
            messageTab.forEach(item => {
               if(messageTab[i] === item ){
                   ind = ind + 1
               }
            });
            newArr.push(ind)
            newArr.push(messageTab[i])
            messageTab = messageTab.filter(item => item !== messageTab[i] )
            console.log(messageTab)
        }
        
    }
    while(!!messageTab.length)
   return newArr.join("")
}
//console.log(encode("aaabbbcccddd"))
//output 3a3b3c3d