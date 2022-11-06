let form=document.querySelector("form").addEventListener("submit",todo);
let tbody=document.querySelector("tbody")
let sum=0;
let count=0;
function todo(event){

event.preventDefault();
let obj= {
 company :document.querySelector("#compName").value,
 market :document.querySelector("#listedExchange").value,
 industry :document.querySelector("#industry").value,
 price :document.querySelector("#stockPrice").value,
 quantity :document.querySelector("#quantity").value,
 type : document.querySelector("#type").value
};
let tr=document.createElement("tr");

let company=document.createElement("td");
company.innerText=obj.company;
count++;

let market=document.createElement("td");
market.innerText=obj.market;

let industry=document.createElement("td");
industry.innerText=obj.industry;

let price=document.createElement("td");
price.innerText=obj.price;

let quantity=document.createElement("td");
quantity.innerText=obj.quantity;

let type=document.createElement("td");
type.innerText=obj.type;

 let total=document.createElement("td");
 let p=price.innerText;
 let q=quantity.innerText;
 let pro= Number(p)*Number(q)
total.innerText= pro;
sum+=Number(total.innerText);
 
let date=document.createElement("td");
date.innerHTML= new Date();

let sell=document.createElement("td");
sell.innerText= "Sell";
sell.style.backgroundColor="red";
sell.style.color="white";
sell.addEventListener("click",function(e){
    e.target.parentNode.remove();
    count--;

    let pro= Number(p)*Number(q)
  
    sum=sum-Number(pro);

    document.getElementById("noOfStock").innerText=count;
    document.getElementById("totalPortfolio").innerText=sum;
  })
  
if(company.innerText!=""&&market.innerText!=""&&industry.innerText!=""&&price.innerText!=""&&quantity.innerText!=""&&type.innerText!="" ){
tr.append(company,market,industry,price,quantity,type,total,date,sell);
tbody.append(tr)
document.getElementById("noOfStock").innerText=count;
document.getElementById("totalPortfolio").innerText=sum;
}
else{
    alert("Please fill all the fields")
}
}
