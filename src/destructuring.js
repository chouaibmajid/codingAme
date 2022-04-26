// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
    
const obj = {
    id: "1",
    name :" wewe",
    last: "wawa",
    qualité : {
        lawla : "msaté",
        tanya :" wa3ar",
        lakhra : {
            sadsa :"sadsa",
            sab3a :"sab3as"
        }
    }
    
}
const {id,name,last,qualité : {lawla,tanya,lakhra : {sadsa,sab3a} }} = obj
const obj2 = {
    id ,
    sab3a
}
const {sab3a : sab3a2} = obj2
console.log(sab3a2)
// output
// sab3as
const obj3 = {
    name,
    tanya,
    sab3a2
}
console.log(id)
// output
// { name: ' wewe', tanya: ' wa3ar', sab3a2: 'sab3as' }