// let arr = [1,2,3,4,5];
// console.log(arr);
// console.log(arr.length);        // leanth of array
// console.log(arr[1]);
// arr[2] = 888;
// console.log(arr, typeof(arr));


// convert array to string
// console.log(arr.toString());

// join() method in array
// let arr = [1,2,3,4,5];
// console.log(arr.join(" and "));



//pop method in js

// let arr = [1,2,3,4,5];
// console.log(arr.pop());
// console.log(arr);

//push method 
//we can add in aaray
// let arr = [1,2,3,4,5];
// console.log(arr.push(100, 'nishant'));
// console.log(arr);

// Shift method
// delete kr deta hain first wale ko

// let arr = [1,2,3,4,5];
// console.log(arr.shift());
// console.log(arr);

// unshift method

// let arr = [1,2,3,4,5];
// console.log(arr.unshift("ravindra"));
// console.log(arr);

// delete method in array
// let arr = [1,2,3,4,5];
// delete arr[2]
// console.log(arr);


//concate method

// let a1 = [1,2,3,4,];
// let a2 = [5,6,7,8,];
// let a3 = [9,10,11,14,];

// let a4 = console.log(a1.concat(a2,a3));
// console.log(a4);


// sort method sort the array means reverse the whole array

// let month = ["jan", "feb", "march", "april","May", "june"];
// month.sort()
// console.log(month);

// const array = [1, 30, 4, 21, 100000];
// array.sort();
// console.log(array);


// splice and slice method in js                // important

// const array = [1, 30, 4, 21, 100000];
// array.splice(1,2);
// console.log(array);

// const nishant = ["nishant", "sheetal", "sachin","nitin", "Daksh"]
// console.log(nishant.splice(2,3));
// console.log(nishant);

// slice method in js
// const array = [1, 30, 4, 21, 100000];
// array.slice(1,2);
// console.log(array);


// function x(){
//     var a = 7;
//     function y(){
//         console.log(a);
        
//     }
//     y();
// }
// x();



// function dukanKholo(){
//     let paisa = 500;
//     function customer(){
//       paisa =   paisa + 100;
//         console.log(paisa);
        
//     } return customer;
// }
// let again  = dukanKholo()
// console.log(again());
// console.log(again());
// console.log(again());
// console.log(again());

// Loops in Array          

// let a = [1, 93 ,75, 66, 77];

// for (let index = 0; index < a.length; index++) {
//     const element = a[index];
//     console.log(element);

// }

// let a = [1, 93 ,75, 66, 77];

// a.forEach((value, index, arr) => {
// console.log(value);
// console.log(index);
// console.log(arr);
    
// });

// let obj={
//     a:1,
//     b:2,
//     c:3
// }

// for (const key in obj) {
    
    
//     const element = obj[key];
//     console.log(element);  
// }


// let a = [1, 93 ,75, 66, 77];
// for (const element of a) {
// console.log(element);

    
// }
// x();
// console.log(x);

// var x = 16;
// debugger;
// function x(){
// console.log(x);

// }
// x();

// console.log(a);
// console.log(x);

// debugger;


// var x = 10;
// let a = 20;


// function x(){
//     a = 7
//     function y(){
//         console.log(a);
        
//     }
//     y()
// }
//   x()

                //Map()

// NoW i want teh result in double

// let arr = [3,4,5,7,8];
// // function double(x){
// //     return x * 2
// // }
// const output = arr.map((x)=>{
//     return x.toString(2)
// })
// console.log(output);



// let arr = [3,4,5,7,8];
// duble array ho jaye

// let output = arr.map((value)=>{
//     return value * 2
// })
// console.log(output);

// dusra tarika double krne ka

// function double(x){
//    return  x * 2;
    
// }
//  let output = arr.map(double)
//      console.log(output);



// filter method
// let arr = [5,1,2,3,6];
//filter odd value
// function  inodd (x){
//     return x % 2;
// }
// let output = arr.filter(inodd)
//       console.log(output);





// Again I need to clarify the Map(),filter(),reduce()


// const arr = [5,1,3,2,6]
//      i want to double this array [10,2,6,4,12]
// function double(p){
//     return p * 2
// }
// const output = arr.map(double)
// console.log(output);

        //    2nd tarika

//     const output = arr.map((x)=>{
//            return x *2
//     })
// console.log(output);


// now i want to triple this array

// const output = arr.map((x)=>{
//             return x * 3     })
//  console.log(output);

// const arr = [5,1,3,2,6]
// define value is odd or not
// function inOdd(x){
//   return x % 2
// }
// function inEven(y){
//     return  y % 2 === 0
// }
// function greter(z){
//     return z >= 4 

// }
// const output = arr.filter(inOdd)
// const output1 = arr.filter(inEven)
// const output2 = arr.filter((z)=>{
//     return z >= 4 

// })

// console.log(output, output1, output2);



//    start from reduce ()

const arr = [5,1,3,2,6]
const output = arr.reduce((acc, cur)=>{

    acc = acc + cur
    return acc 

},0)
console.log(output);
