// const promise = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         resolve('me phala promise hu bhai jaaan');
//     },5000);   
// })

// const promise2 = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         resolve('me dusra promise hu bhai jaaan');
//     },10000);   
// })


// async function getData(){
//     return p
// }
// const data = getData();
// //console.log(data);

// data.then(function(res){
//      console.log('my result is', res);
     
// })
/////////////////////////////////With - Asynce - Await//////////////////////////////////




// async function getData(){
    
//     const val = await promise
//     console.log('pahale promise ka output hu');
    
//     console.log(val);

//       const val2 = await promise2
//     console.log('dusre promise ka output hu ');
    
//     console.log(val2);
    
    
    
//  }
// getData()


 ////////////////////////    without Async-Await//////////////////
// function getData(){
//     promise.then((res) => console.log(res));
    
//          console.log("nishant...............09909099");
         
    
// }
// getData();



////////////////////REAL WORLD EXAMPLE OF ASYNCE AWAIT////////////////////////////
/////////////////////USING FETCH/////////////////////////////////////////////////////////
 const USER_API =  'https://api.github.com/users/nishant8860'

async function handlePomise(){
    try {
    const data = await fetch(USER_API)
   const jsonValue = await data.json()
   console.log(jsonValue);
   
    } 
    catch(err){
           console.log('hi eror aarhi h', err);
           
    }
   
   
}
handlePomise()