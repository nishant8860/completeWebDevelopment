let URL  = 'https://api.thecatapi.com/v1/images/0XYvRd7oD'
// let promise = fetch(URL)
// console.log(promise);

const getData = async () => {
    console.log("Fetching the API");
    let response =  await fetch(URL)
    console.log(response);
    let data  = await response.json();
     console.log(data);
     
    
}
getData();