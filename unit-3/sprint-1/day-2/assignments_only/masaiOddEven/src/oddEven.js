function generateNumber() {

  let x= Math.floor((Math.random() * 100) + 1);
  document.getElementById("number").textContent=x;
  checkOddEven(x)
  // generate a random integer(hint : Math.random)
}

function checkOddEven(num) {
  if(num%2==0){
    document.getElementById("odd-even").textContent="The number is even";
  }
  else{
    document.getElementById("odd-even").textContent="The number is odd";
  }
  // logic for even / odd
}

window.onload = function () {
document.getElementById("generate-number").addEventListener("click",generateNumber)


  // add event listeners to the button here
};





// donot change the following export statement

if (typeof exports !== "undefined") {
  module.exports = {
    generateNumber,
    checkOddEven,
  };
}
