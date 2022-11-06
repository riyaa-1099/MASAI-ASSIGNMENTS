function Listing(name,category,link,price) {
  this.name = name;
  this.category = category;
  this.imageUrl = link;
  this.price = price;
  this.sold=false;
}



function addListing(input, category, image, price) {
  let productsArr=JSON.parse(localStorage.getItem("Products"))|| [];
  let objData= new Listing(input, category, image, price);
    productsArr.push(objData);
    localStorage.setItem("Products",JSON.stringify(productsArr));
}



  
function getFormData(event){
    event.preventDefault();

product_name=document.querySelector("#name").value;
product_category=document.querySelector("#category").value;
product_image=document.querySelector("#image").value;
product_price=document.querySelector("#price").value;
sold=false;

addListing(product_name,product_category,product_image,product_price)
  }
  //  get the form here and add submit event and handle the preventDefault
  

  window.onload = function () {
    let productsArr=JSON.parse(localStorage.getItem("product-list"))|| [];
    document.querySelector("form").addEventListener("submit",getFormData);
};



if (typeof exports !== "undefined") {
  module.exports = {
    Listing,
    addListing,
  };
}
