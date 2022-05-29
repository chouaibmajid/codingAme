function visversa(str){
    var str2 = str.split("").reverse().join("")
    console.log(str,str2)
    return str === str2
}
console.log(visversa("kayak"))