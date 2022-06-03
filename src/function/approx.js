
function approx(pts) {
  
    let pointsThatSatisfyTheFormula = [];
  
    for(let i = 0; i < pts.length;i++){
        let point = pts[i];
        let x = point[0];
        let y = point[1];
  
        if(Math.pow(x, 2) + Math.pow(y, 2) <= 1){
            pointsThatSatisfyTheFormula.push(point);
        }
    }
  
    let approximateValueOfPi = 4 * (pointsThatSatisfyTheFormula.length / pts.length);
  
    return approximateValueOfPi;
  }
  