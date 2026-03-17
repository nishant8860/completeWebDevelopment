let promiseOne  = new Promise(function(resolve , reject){
    // do async task
    setTimeout(function(){
            console.log('Async task is completed');
            resolve();
            
    }, 1000)

})

promiseOne.then(function(){
    console.log("promise consumed");
    
})

// 2nd  promise  isme me issse kisi variable me nhi le rha hu

new Promise(function(resolve,reject){
            setTimeout(function(){
 console.log('Async  2nd task is completed');
            resolve();
            }, 1000)
}).then(function(){
    console.log("promise consumed 2");
})

let promiseThird = new Promise(function(resolve, reject){
           setTimeout(function(){
        
           resolve({username:'nishant', 
                    email: "nishant@gmail.com",
                    phone:'9988777788'
           })
           }, 1000)
}) 
promiseThird.then(function(user){
        console.log(user);
        
})


let promiseFourth = new Promise(function(resolve, reject){
          setTimeout(function(){
           let error = true;
           if(!error){
           resolve({ username:"sheetal", password:"1234"})
           }else{
            reject('ERROE! something went wrong')
           }
          },1000)
})
promiseFourth.then(function(){
       console.log();
       
})
promiseFourth
.then((user)=>{
  console.log(user)
  return user.username
}).then((username)=>{
        console.log(username);
        
}).catch((error)=>{
       console.log(error);
       
}).finally(()=>
    console.log("the promise is either resolve or reject"))


const promiseFive = new Promise(function(resolve, reject){
      setTimeout(function(){
           let error = false;
           if(!error){
           resolve({ username:"JS", password:"1234"})
           }else{
            reject('ERROE! JSSSSSSSSS something went wrong')
           }
          },1000)
});
   async function consumePromiseFive(){
            const response = await promiseFive
            console.log(response);
            
   }
   consumePromiseFive()