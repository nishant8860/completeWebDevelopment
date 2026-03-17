
// let promise = new Promise((resolve, reject)=>{
//          console.log('i am promise');
//          resolve('yes i am resolve')
//         // reject('erroep')
// })
// promise.then((res)=>{
//     console.log('completed', res);
    
// })
// promise.catch((res)=>{
//     console.log('error ', res);
    
// })


// const getData = () =>{
//      new Promise((reslove, reject)=>{
//         console.log('Promise make it')
//         //reslove('Yes! Got It')
//         reject('errorrrrrr')
//      }).then((res)=>{
//           console.log('I Got Resolve' , res);
          
//      }).catch((res)=>{
//             console.log('error',res )
//      }) 
// }
// getData();




//Promise Chain

// function Async1(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log('Kuch Pal Wait');
//             resolve('RESOLVE!!!')
            
//         }, 3000)
           
//     })
// }

// function Async2(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log('Kuch Pal Wait');
//             resolve('RESOLVE!!!')
            
//         }, 3000)
           
//     })
// let P1 = Async1();
// P1.then((res)=>{
//      console.log('Maza AAyay, res');
     
// })
// P1.catch((res)=>{
//     console.log('me error hu',res)
// })
// let P2 = Async2();
// P2.then((res)=>{
//      console.log('Maza AAyay, res');
     
// })
// P2.catch((res)=>{
//     console.log('me error hu',res)
// })

// }



// Asynce/Await

//    async function Hello(){
//       console.log('Hello Hi');
      
//    }
//    Hello();


