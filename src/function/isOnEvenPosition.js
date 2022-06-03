function isOnEvenPosition(table, value) {

    const index = table.findIndex(item => item == value)
    if(index % 2 == 0) return true 
    else return false
    // You code goes here...
    
  }