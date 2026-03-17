// Faulty Caluculator

let random = Math.random()
//console.log(random);
let a  = prompt("Enter First Number");
let c =  prompt("Enter permormanece Number");
let b =  prompt("Enter Second Number");

let obj = {
    "+" : "-",
    "*" : "+",
    "-" : "/",
    "/" : "**"


}


if(random > 0.1){
      //correct calcution
      alert(`the result is ${eval(`${a} ${c} ${b}`)}`)
}
else{
    //wrong calculation
    c = obj[c]
}


