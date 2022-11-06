function redirectToIndexPage() {
  window.location.href="index.html"
}

function append() {
let mydata=JSON.parse(localStorage.getItem("data"))||[];
let cont=document.getElementById("products_data");
if(cont){
  cont.innerHTML=null;
}
mydata.map(function(el,i){
  let div=document.createElement("div");


let img=document.createElement("img");
img.src=el.image;
img.style.height= "210px";

let p1=document.createElement("p");
p1.innerText=el.name;
let p2=document.createElement("p");
p2.innerText=el.brand;
let p3=document.createElement("p");
p3.innerText=el.price;

let btn=document.createElement("button");
btn.innerText="Remove Product";

btn.onclick=function(){
  remove(i)
}

div.append(img,p1,p2,p3,btn)
cont.append(div)
});
}

function remove(index) {
  let mydata=JSON.parse(localStorage.getItem("data"))||[];
  mydata.splice(index,1)
localStorage.setItem("data",JSON.stringify(mydata));
append(mydata)
}

window.addEventListener("load", function () {
document.getElementById("add_product").addEventListener("click",redirectToIndexPage);
append();
  // get the add more products button here and add eventlisteners
  // onload invoke append function
});
