// The items should be stored in local storage with key :- “items”
// API :- https://mock-server-js.onrender.com/api/groceries
let lsData=JSON.parse(localStorage.getItem("items"))||[];
let itemCount=document.getElementById("item_count");
let count=0;
searchItems()
async function searchItems(){
try{
<<<<<<< HEAD
    let res= await fetch(` https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-groceries`)
=======
    let res= await fetch(`https://mock-server-js.onrender.com/api/groceries`)
>>>>>>> e15b2a3e488058d4b3f5faf800454f0800d8bdbc
    let data= await res.json()
    let actual_data=data.data;

   appendItems(actual_data)
localStorage.setItem("items",JSON.stringify(actual_data))
}
catch(error){
    console.log(error)
}

}


function appendItems(data){
<<<<<<< HEAD
  
    let data_div=document.getElementById("items");
//data_div.innerHTML="null";
=======
    
    let data_div=document.getElementById("items");
data_div.innerHTML="null";
>>>>>>> e15b2a3e488058d4b3f5faf800454f0800d8bdbc
//data_div.id="items";
data.forEach(function(el,index){
    let div=document.createElement("div");
div.class="item";

let p_name=document.createElement("p");
p_name.innerHTML=el.name;


let p_price=document.createElement("p");
p_price.innerHTML=el.price;


let img=document.createElement("img");
<<<<<<< HEAD
img.setAttribute("class","poster");
img.src=el.image;

let btn=document.createElement("button");
=======
img.class="poster";
img.src=el.image;

let btn=document.createElement("button")
>>>>>>> e15b2a3e488058d4b3f5faf800454f0800d8bdbc
btn.class="add_to_cart";
btn.innerHTML="Add to Cart";
btn.addEventListener("click",function(event){
    add_cart(index);
})

div.append(img,p_name,p_price,btn)

data_div.append(div);

})
}


function add_cart(index){
    count++;
 let cart_Data=lsData.filter(function(el,i){
if(i===index){
    let cart=JSON.parse(localStorage.getItem("cart"))||[];
    cart.push(el);
<<<<<<< HEAD
    localStorage.setItem("cart",JSON.stringify(cart));   
}
 })  
itemCount.innerHTML=count;
}
=======
    localStorage.setItem("cart",JSON.stringify(cart));
    
}
 })  


}
itemCount.innerHTML=count;
>>>>>>> e15b2a3e488058d4b3f5faf800454f0800d8bdbc
