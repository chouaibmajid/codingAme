function isDuoDigit(number) {
    if(new Set(Math.abs(number).toString()).size <= 2){
        return 'y'
    }
    else return 'n'
}
