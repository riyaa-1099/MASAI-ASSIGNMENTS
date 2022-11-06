

document.querySelector("#add").addEventListener("click",redirect)

function redirect() {
<<<<<<< HEAD
window.location.href="index.html"
}

function append() {
  let lsData=JSON.parse(localStorage.getItem("data"))||[];
  let container=document.getElementById("products_data");
  if(container){
  container.innerHTML=null;
}

lsData.map(function(el,i){
  let div=document.createElement('div');
  div.innerHTML=
  <div>
    <img src="${el.image}"/>
  </div>
  <div> ${el.name}<div/>
  <div> ${el.brand}</div>
  <div> ${el.price}</div>
  <div><button onclick="remove(${i})">Remove</button></div>
container.append(div)
})
}
=======
location.href="index.html"
}

function append() {
  let Data=JSON.parse(localStorage.getItem("data"))||[];
  let div=document.getElementById("products_data");
  div.innerHTML=null;
Data.forEach(function(el,id){
let p1=document.createElement("p");
p1.innerText=el.name;
let p2=document.createElement("p");
p2.innerText=el.brand;
let p3=document.createElement("p");
p3.innerText=el.price;
let img=document.createElement("img");
img.src=el.image;
let p4=document.createElement("p");
p4.innerText="Remove";
p4.addEventListener("click",function(){
  remove(id)
});
div.append(p1,p2,p3,img,p4)

});
  
}


>>>>>>> e15b2a3e488058d4b3f5faf800454f0800d8bdbc

function remove(id) {
  Data.splice(id,1);
  localStorage.setItem("data",JSON.stringify(Data));
append(Data)
    
  }

  






if (typeof exports !== "undefined") {
  module.exports = {
    append, remove
  };
}