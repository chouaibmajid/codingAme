function isValidIP(str) {
    // console.log(isNaN("4e"))
    if(!str) return false
    var strTab = str.split('.')
function AnnulZero(strTab){
   return  strTab.some(item => item.split("")[0] == "0" && item.split("").length > 1 )
}
if(AnnulZero(strTab)) return false
function verifSpace(tab){
    return tab.split(".").some(item => item.includes(" "))
}
if(verifSpace(str)) return false
  function verifslachN(str){
    return str.split(".").some(item => item.includes("\n"))
}
if(verifslachN(str)) return false
if(strTab.length !== 4) return false
function verifNumber(str){
   var tab =[];
   str.split(".").forEach(item => {
          var tab2 =[];
       for(let number of item.split("")){
          if(isNaN(number)){
              tab2.push(1)
          }else tab2.push(0) 
       }
       if(tab2.includes(1)){
           tab.push(1)
       }else tab.push(0)
   })
   return tab
}

if(verifNumber(str).includes(1)) return false
function verif(strTab){
   return strTab.map(item => 
   {
       if(parseInt(item)<= 255){
     return 0  
   }else return 1 }  ) 
}
if(verif(strTab).includes(1)) return false
  return true;
}

console.log(isValidIP('1e0.1e1.1e2.2e2'))


// describe("Sample tests", () => {

//   Test.assertEquals(isValidIP("0.0.0.0"), true);
//   Test.assertEquals(isValidIP("12.255.56.1"), true);
//   Test.assertEquals(isValidIP("137.255.156.100"), true);
  
//   Test.assertEquals(isValidIP(''), false);
//   Test.assertEquals(isValidIP('abc.def.ghi.jkl'), false);
//   Test.assertEquals(isValidIP('123.456.789.0'), false);
//   Test.assertEquals(isValidIP('12.34.56'), false);
//   Test.assertEquals(isValidIP('01.02.03.04'), false);
//   Test.assertEquals(isValidIP('256.1.2.3'), false);
//   Test.assertEquals(isValidIP('1.2.3.4.5'), false);
//   Test.assertEquals(isValidIP('123,45,67,89'), false);
//   Test.assertEquals(isValidIP('1e0.1e1.1e2.2e2'), false);
//   Test.assertEquals(isValidIP(' 1.2.3.4'), false);
//   Test.assertEquals(isValidIP('1.2.3.4 '), false);
//   Test.assertEquals(isValidIP('12.34.56.-7'), false);
//   Test.assertEquals(isValidIP('1.2.3.4\n'), false);
//   Test.assertEquals(isValidIP('\n1.2.3.4'), false);
// });
