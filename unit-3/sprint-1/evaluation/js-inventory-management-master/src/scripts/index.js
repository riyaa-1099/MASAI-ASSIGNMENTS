// document.querySelector("#show-products").addEventListener("click",redirect);

function redirect() {
<<<<<<< HEAD
window.location.href="inventory.html"
}

// let form=document.getElementById("product_form")
// // form.addEventListener("submit",getFormData)

// let Data=JSON.parse(localStorage.getItem("data"))||[];


function getFormData(e){
let form=new FormData(e.target)
let name=form.get('name');
let brand=form.get('brand');
let price=form.get('price');
let imageLink=form.get('image');
}
//   e.preventDefault();
//   let obj={
// name:form.product_name.value,
// brand:form.product_brand.value,
// price:form.product_price.value,
// image:form.product_image.value,
//   };
// Data.push(obj);
// localStorage.setItem("data",JSON.stringify(Data))
// }
=======
location.href="inventory.html"
}

let form=document.getElementById("product_form")
// form.addEventListener("submit",getFormData)

let Data=JSON.parse(localStorage.getItem("data"))||[];


function getFormData(event){
  event.preventDefault();
  let obj={
name:form.product_name.value,
brand:form.product_brand.value,
price:form.product_price.value,
image:form.product_image.value,
  };
Data.push(obj);
localStorage.setItem("data",JSON.stringify(Data))
}
>>>>>>> e15b2a3e488058d4b3f5faf800454f0800d8bdbc



function addData(name, brand, price, imageLink) {
<<<<<<< HEAD
 let data={name, brand, price, imageLink};
 let localdata=JSON.parse(localStorage.getItem("data"))||[];
 localdata.push(data);
 localStorage.setItem('data',JSON.stringify(localdata))
}
window.addEventListener('load',function(){
  let myform=document.getElementById('product_form');
  myform.addEventListener('submit',function(e){
    e.preventDefault();
    getFormData(e)
  })
})
=======
 this.name = name;
 this.brand = brand;
 this.price = price;
 this.image = image;
}

>>>>>>> e15b2a3e488058d4b3f5faf800454f0800d8bdbc



if (typeof exports !== "undefined") {
  module.exports = {
    addData,
    redirect,
  };
}