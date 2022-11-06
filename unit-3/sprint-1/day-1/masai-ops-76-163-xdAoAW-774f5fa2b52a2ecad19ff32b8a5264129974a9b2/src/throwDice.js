const memberA = () => {};

const memberB = () => {};

const memberC = () => {};

const findWinner = (val1, val2, val3) => {};
function rollDice(){
  return Math.floor(Math.random() * (6)) + 1;
}
window.onload = function () {

  document.getElementById("roll").addEventListener("click", function () {

    // roll dice for all players
    const player1Score = rollDice();
    const player2Score = rollDice();
    const player3Score = rollDice();
  
  
  document.getElementById("member-a").value=player1Score;
  document.getElementById("member-b").value=player2Score;
  document.getElementById("member-c").value=player3Score;
  
    // initialize empty string to store result
    let result = "";
  
    // determine the result
    if (player1Score > player2Score && player1Score > player3Score ) {
      result = `The winner : Member A`;
      document.getElementById("member-a").style.backgroundColor = 'green';
      if(player2Score > player3Score){
          document.getElementById("member-b").style.backgroundColor = 'yellow';
          document.getElementById("member-c").style.backgroundColor = 'red';        
      }
      else{
          document.getElementById("member-b").style.backgroundColor = 'red';
          document.getElementById("member-c").style.backgroundColor = 'yellow';  
      }
  
  
    } else if (player2Score > player1Score && player2Score > player3Score ) {
      result = `The winner : Member B`;
  
      document.getElementById("member-b").style.backgroundColor = 'green';
      if(player1Score > player3Score){
          document.getElementById("member-a").style.backgroundColor = 'yellow';
          document.getElementById("member-c").style.backgroundColor = 'red';        
      }
      else{
          document.getElementById("member-a").style.backgroundColor = 'red';
          document.getElementById("member-c").style.backgroundColor = 'yellow';  
      }
  
    } else if(player3Score > player1Score && player3Score > player2Score){
      result=`The winner : Member C`;
  
      document.getElementById("member-c").style.backgroundColor = 'green';
      if(player2Score > player1Score){
          document.getElementById("member-b").style.backgroundColor = 'yellow';
          document.getElementById("member-a").style.backgroundColor = 'red';        
      }
      else{
          document.getElementById("member-b").style.backgroundColor = 'red';
          document.getElementById("member-a").style.backgroundColor = 'yellow';  
      }
  
    } else if(player3Score == player1Score && player3Score < player2Score){
      result = `The winner : Member B`;
      document.getElementById("member-b").style.backgroundColor = 'green';
      document.getElementById("member-a").style.backgroundColor = 'blue';
      document.getElementById("member-c").style.backgroundColor = 'blue';  
  
    }
    else if(player3Score == player2Score && player3Score < player1Score){
      result = `The winner : Member A`;
      document.getElementById("member-a").style.backgroundColor = 'green';
      document.getElementById("member-b").style.backgroundColor = 'blue';
      document.getElementById("member-c").style.backgroundColor = 'blue';  
    }
    else if(player2Score == player1Score && player2Score < player3Score){
      result = `The winner : Member C`;
      document.getElementById("member-c").style.backgroundColor = 'green';
      document.getElementById("member-a").style.backgroundColor = 'blue';
      document.getElementById("member-b").style.backgroundColor = 'blue';  
    }
    else if(player1Score==player2Score==player3Score){
      result = `it's a draw`;
      document.getElementById("member-c").style.backgroundColor = 'blue';
      document.getElementById("member-a").style.backgroundColor = 'blue';
      document.getElementById("member-b").style.backgroundColor = 'blue'; 
    }
    else if(player1Score==player2Score && player1Score>player3Score){
      result = `it's a draw`;
      document.getElementById("member-c").style.backgroundColor = 'red';
      document.getElementById("member-a").style.backgroundColor = 'blue';
      document.getElementById("member-b").style.backgroundColor = 'blue'; 
    }
    else if(player2Score==player3Score && player2Score>player1Score){
      result = `it's a draw`;
      document.getElementById("member-a").style.backgroundColor = 'red';
      document.getElementById("member-c").style.backgroundColor = 'blue';
      document.getElementById("member-b").style.backgroundColor = 'blue'; 
    }
    else if(player1Score==player3Score && player1Score>player2Score){
      result = `it's a draw`;
      document.getElementById("member-b").style.backgroundColor = 'red';
      document.getElementById("member-a").style.backgroundColor = 'blue';
      document.getElementById("member-c").style.backgroundColor = 'blue'; 
    }
  
    // display the result on the page
    document.getElementById("winner").innerHTML = result
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
