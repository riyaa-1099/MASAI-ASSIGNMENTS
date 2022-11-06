//store the products array in localstorage as "data"

function redirectToInventoryPage() {
  window.location.href="inventory.html"
}

function getFormData(e) {
  e.preventDefault();
  form=document.querySelector("form");
  myname=form.product_name.value;
  mybrand=form.product_brand.value;
  myprice=form.product_price.value;
  myimage=form.product_image.value;
addData(myname,mybrand,myprice,myimage);
//console.log(myname,mybrand,myprice,myimage)
}

function addData(name, brand, price, image) {

let myData=JSON.parse(localStorage.getItem("data"))||[];
let finalData={
"name": name,
"brand": brand,
"price": price,
"image": image
}
myData.push(finalData)
localStorage.setItem('data',JSON.stringify(myData))

}

window.addEventListener("load", function () {
  document.getElementById("show_products").addEventListener("click",redirectToInventoryPage);

});
