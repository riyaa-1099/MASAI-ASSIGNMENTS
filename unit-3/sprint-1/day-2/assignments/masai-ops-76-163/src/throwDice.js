const memberA = () => {};

const memberB = () => {};

const memberC = () => {};

const finWinner = (memberA, memberB, memberC) => {



};
function rollDice(){
  return Math.floor(Math.random() * (6)) + 1;
}
window.onload = function () {

  document.getElementById("roll").addEventListener("click", function () {

    // roll dice for all players
    const memberA = rollDice();
    const memberB = rollDice();
    const memberC = rollDice();
  
  
  document.getElementById("member-a").value=memberA;
  document.getElementById("member-b").value=memberB;
  document.getElementById("member-c").value=memberC;
  
    // initialize empty string to store result

    // determine the result
    if (memberA > memberB && memberA > memberC ) {
      findWinner = `The winner : Member A`;
      document.getElementById("member-a").style.backgroundColor = 'green';
      if(memberB > memberC){
          document.getElementById("member-b").style.backgroundColor = 'yellow';
          document.getElementById("member-c").style.backgroundColor = 'red';        
      }
      else{
          document.getElementById("member-b").style.backgroundColor = 'red';
          document.getElementById("member-c").style.backgroundColor = 'yellow';  
      }
  
  
    } else if (memberB > memberA && memberB > memberC ) {
      findWinner = `The winner : Member B`;
  
      document.getElementById("member-b").style.backgroundColor = 'green';
      if(memberA > memberC){
          document.getElementById("member-a").style.backgroundColor = 'yellow';
          document.getElementById("member-c").style.backgroundColor = 'red';        
      }
      else{
          document.getElementById("member-a").style.backgroundColor = 'red';
          document.getElementById("member-c").style.backgroundColor = 'yellow';  
      }
  
    } else if(memberC > memberA && memberC > memberB){
      findWinner=`The winner : Member C`;
  
      document.getElementById("member-c").style.backgroundColor = 'green';
      if(memberB > player1Score){
          document.getElementById("member-b").style.backgroundColor = 'yellow';
          document.getElementById("member-a").style.backgroundColor = 'red';        
      }
      else{
          document.getElementById("member-b").style.backgroundColor = 'red';
          document.getElementById("member-a").style.backgroundColor = 'yellow';  
      }
  
    } else if(memberC == memberA && memberC < memberB){
      findWinner = `The winner : Member B`;
      document.getElementById("member-b").style.backgroundColor = 'green';
      document.getElementById("member-a").style.backgroundColor = 'blue';
      document.getElementById("member-c").style.backgroundColor = 'blue';  
  
    }
    else if(memberC == memberB && memberC < memberA){
      findWinner = `The winner : Member A`;
      document.getElementById("member-a").style.backgroundColor = 'green';
      document.getElementById("member-b").style.backgroundColor = 'blue';
      document.getElementById("member-c").style.backgroundColor = 'blue';  
    }
    else if(memberB == memberA && memberB < memberC){
      findWinner = `The winner : Member C`;
      document.getElementById("member-c").style.backgroundColor = 'green';
      document.getElementById("member-a").style.backgroundColor = 'blue';
      document.getElementById("member-b").style.backgroundColor = 'blue';  
    }
    else if(memberA==memberB==memberC){
      findWinner = "It's a draw!";
      document.getElementById("member-c").style.backgroundColor = 'blue';
      document.getElementById("member-a").style.backgroundColor = 'blue';
      document.getElementById("member-b").style.backgroundColor = 'blue'; 
    }
    else if(memberA==memberB && memberA>memberC){
      findWinner = "It's a draw!";
      document.getElementById("member-c").style.backgroundColor = 'red';
      document.getElementById("member-a").style.backgroundColor = 'blue';
      document.getElementById("member-b").style.backgroundColor = 'blue'; 
    }
    else if(memberB==memberC && memberB>memberA){
      findWinner = "It's a draw!";
      document.getElementById("member-a").style.backgroundColor = 'red';
      document.getElementById("member-c").style.backgroundColor = 'blue';
      document.getElementById("member-b").style.backgroundColor = 'blue'; 
    }
    else if(memberA==memberC && memberA>memberB){
      findWinner = "It's a draw!";
      document.getElementById("member-b").style.backgroundColor = 'red';
      document.getElementById("member-a").style.backgroundColor = 'blue';
      document.getElementById("member-c").style.backgroundColor = 'blue'; 
    }
  
    // display the result on the page
    document.getElementById("winner").innerHTML = findWinner;
  }
  );
  //  get the button here and add click event
};


if (typeof exports !== "undefined") {
  module.exports = {
    memberA,
    memberB,
    memberC,
    findWinner,
  };
}
