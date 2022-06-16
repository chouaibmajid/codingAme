function accum(s) {
	var NewArr = []
	s.split("").forEach((item,id) => {
	    var newArr2 = [item.toUpperCase()]
	    for(let i = 0 ; i< id ; i++){
	        newArr2.push(item.toLowerCase())
	    }
	    NewArr.push(newArr2.join(""))
	})
	
	return NewArr.join("-")}