<<<<<<< HEAD
let id=JSON.parse(localStorage.getItem("details"));
//console.log(id)
let APIKEY="rKLc3WelDRhAkvbf4OqT6sgDUtuqxP80";

const details = async () => {
try{
let response =
await fetch(`https://api.giphy.com/v1/gifs/${id}?api_key=${APIKEY}`);
let data= await response.json();
append(data.data);
console.log(data.data)
}
catch(error){
    console.log(error)
}

}
details();

const append = (data) => {
let details=document.getElementById("details");
let img= document.createElement("img");
img.src=data.images.original.url;

let p=document.createElement("p");
p.innerHTML=data.title;
details.append(p,img)
=======
let id=JSON.parse(localStorage.getItem("details"));
//console.log(id)
let APIKEY="rKLc3WelDRhAkvbf4OqT6sgDUtuqxP80";

const details = async () => {
try{
let response =
await fetch(`https://api.giphy.com/v1/gifs/${id}?api_key=${APIKEY}`);
let data= await response.json();
append(data.data);
console.log(data.data)
}
catch(error){
    console.log(error)
}

}
details();

const append = (data) => {
let details=document.getElementById("details");
let img= document.createElement("img");
img.src=data.images.original.url;

let p=document.createElement("p");
p.innerHTML=data.title;
details.append(p,img)
>>>>>>> e15b2a3e488058d4b3f5faf800454f0800d8bdbc
}