<<<<<<< HEAD
let data=JSON.parse(localStorage.getItem("cart"))||[];
 


append(data);

function append(data){
    let cart_total=document.getElementById("cart_total")
    let price=0;
let addData=document.getElementById("cart");
addData.innerHTML=null;

data.forEach(function(el,index){
    let div=document.createElement("div");
div.class="item";

let p_name=document.createElement("p");
p_name.innerHTML=el.name;


let p_price=document.createElement("p");
p_price.innerHTML=el.price;
price+= +(el.price);

let img=document.createElement("img");

img.setAttribute("class","poster");
img.src=el.image;

let btn=document.createElement("button")
btn.class="remove";
btn.innerHTML="Remove";
btn.addEventListener("click",function(event){
    remove_cart(index);
})
div.append(img,p_name,p_price,btn)

addData.append(div);
cart_total.innerHTML=price;
})
}


function remove_cart(index){
data.splice(index,1);
    localStorage.setItem("cart",JSON.stringify(data));
    append(data);
    // count--;
}
   
//  let itemcount=document.getElementById("item_count");
//  itemcount.innerHTML=count;
 
// cart_total.innerHTML=price;
=======
let data=JSON.parse(localStorage.getItem("cart"))||[];
let cart_total=document.getElementById("cart_total")
let price=0; 


append(data);

function append(data){
let addData=document.getElementById("cart");
addData.innerHTML=null;

data.forEach(function(el,index){
    let div=document.createElement("div");
div.class="item";

let p_name=document.createElement("p");
p_name.innerHTML=el.name;


let p_price=document.createElement("p");
p_price.innerHTML=el.price;
price+= +(el.price);

let img=document.createElement("img");
img.class="poster";
img.src=el.image;

let btn=document.createElement("button")
btn.class="remove";
btn.innerHTML="Remove";
btn.addEventListener("click",function(event){
    remove_cart(index);
})
div.append(img,p_name,p_price,btn)

addData.append(div);

})
}


function remove_cart(index){
data.splice(index,1);
    localStorage.setItem("cart",JSON.stringify(data));
    append(data);
    // count--;
}
   
//  let itemcount=document.getElementById("item_count");
//  itemcount.innerHTML=count;
 
cart_total.innerHTML=price;
>>>>>>> e15b2a3e488058d4b3f5faf800454f0800d8bdbc
