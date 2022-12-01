function calc(array, n1, n2) {
    // Your code goes here
    var sum = 0
    array.forEach((item,index) => {
        if(index <= n2 && index >= n1){
            sum += item
        }
    })
    return sum;
}