<<<<<<< HEAD
let wallet = JSON.parse(localStorage.getItem("amount"))||0;
document.getElementById("wallet").innerText=wallet;

function addmoney(){

let newmoney=+(document.getElementById("amount").value);
let money=(newmoney+wallet);
//console.log(typeof(newmoney))
document.getElementById("wallet").innerText=money

localStorage.setItem("amount",JSON.stringify(money))
=======
let wallet = JSON.parse(localStorage.getItem("amount"))||0;
document.getElementById("wallet").innerText=wallet;

function addmoney(){

let newmoney=+(document.getElementById("amount").value);
let money=(newmoney+wallet);
//console.log(typeof(newmoney))
document.getElementById("wallet").innerText=money

localStorage.setItem("amount",JSON.stringify(money))
>>>>>>> e15b2a3e488058d4b3f5faf800454f0800d8bdbc
}