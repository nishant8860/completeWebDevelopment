// const student =  {
//     name:'Nishant Sharma',
//     Age:21,
//     marks:34.3,
//     degree:function deg(){
//         console.log('all is information about student', this.degree);
        
//     }

// }
// deg();


// creating Class in js


// class Building {
//     Awing(){
//         console.log("paint hua");
        
//     }
//     Bwing(){
//         console.log('paint nhi hua');
        
//     }
// }
// let Panchsheel = new Building();

// const obg = {
//        a:'nishant',
//        b:'sharma'
// }
// console.log(obg);


// let telus = {
//     nishant:'developer'
// };
// let worker = {
//     sharma:'soft.engg'
// }

// nishant.__proto__ = telus

// function x(){
//     console.log('Nishant');
    
// }

// function y(x){
//     x();
    
// }
// y();


// const arr = [2,4,3,5];
// function double(x){
//     return x * 2;
// }
//  const output = arr.map(double)
//  console.log(output);


    //  Higher Order Function Map(), Filter(), Reduce()

    

    // 1. double kro  2. triple kro  3. binary convert kro

    // function double(a) {
    //     return a * 2;
    // }
    //  function triple(a) {
    //     return a * 3;
    // }

    // function Bin(x){
    //     return x.toString(2)
    // }
    // const result = arr.map(double);
    // const result1 = arr.map(triple);
    // const result3 = arr.map(Bin);
    // console.log(result3)

    // const arr = [5, 1, 3, 2, 6]
    // filter all the odd values

    // function odd(x){
    //      return x%2
    // }
    //  function even(x){
    //      return x%2 == 0
    // }
    //   function grater(x){
    //      return x>=4;
    // }
    //   function sml(x){
    //      return x<=4
    // }

    //  const result = arr.filter(odd)
    //  const result1 = arr.filter(even)
    //  const result2 = arr.filter(grater)
    //  const result3 = arr.filter(sml)
    //  console.log(result);
    //  console.log(result1);
    //  console.log(result2);
    //  console.log(result3);
     
     


    // reduce method in JS

    //  const arr = [5, 1, 3, 2, 6]

    // const red = arr.reduce((acc, curr)=>{
    //           return acc + curr
    // })
    // const mul = arr.reduce((acc = 1 , curr)=>{
    //     return acc * curr

    //  })

    // console.log(red);
    // console.log(mul);

    


const users = [
    {firstName:'aksay', lastName:'saini', age:26},
    {firstName:'donald', lastName:'trump', age:75},
    {firstName:'elon', lastName:'mask', age:50},
    {firstName:'deepika', lastName:'padukon', age:26},

];

// inme se full name 
// function n(x){
//      return x.firstName + x.lastName
// }


const fullName = users.filter((x) => x.age>30)
         
console.log(fullName);


















