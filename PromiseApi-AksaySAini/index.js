const p1 = new Promise(function(resolve , reject){
         setTimeout(() => resolve('p1 is successful'),3000);
})
const p2 = new Promise(function(resolve , reject){
         //setTimeout(() => resolve('p2 is successful'),1000);
         setTimeout(() => reject('p2 is failed'),1000);
})
const p3 = new Promise(function(resolve , reject){
         setTimeout(() => resolve('p3 is successful'),2000);
})




// Promise.all([p1, p2, p3]).then(function(res){
//     console.log(res);
    
// }).catch(function(error){
//     console.log('isme error ko print kro',error);
    
// })
            



// Promise.allSettled([p1, p2, p3]).then(function(res){
//     console.log(res);
    
// }).catch(function(error){
//     console.log('isme error ko print kro',error);
    
// })




// Promise.race([p1, p2, p3]).then(function(res){
//     console.log(res);
    
// }).catch(function(error){
//     console.log('isme error ko print kro',error);
    
// })



Promise.any([p1, p2, p3]).then(function(res){
    console.log(res);
    
}).catch(function(error){
    console.log('isme error ko print kro',error);
    
})