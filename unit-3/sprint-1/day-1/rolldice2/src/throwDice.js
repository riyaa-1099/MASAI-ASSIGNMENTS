const memberA = () => {return Math.floor(Math.random() * (6)) + 1};

const memberB = () => {return Math.floor(Math.random() * (6)) + 1};

const memberC = () => {return Math.floor(Math.random() * (6)) + 1};

const findWinner = (memberA, memberB, memberC) => {
  let winner;
//   let score=[memberA,memberB,memberC]
//   let res=score.sort(compare)
//   function compare(a,b){
//     return a-b;
//   }
// if(res[0]>res[1] && res[0]>res)
    if (memberA > memberB && memberA > memberC ) {
      winner = `The winner : Member A`;
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
      winner = `The winner : Member B`;
  
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
      winner=`The winner : Member C`;
  
      document.getElementById("member-c").style.backgroundColor = 'green';
      if(memberB > memberA){
          document.getElementById("member-b").style.backgroundColor = 'yellow';
          document.getElementById("member-a").style.backgroundColor = 'red';        
      }
      else{
          document.getElementById("member-b").style.backgroundColor = 'red';
          document.getElementById("member-a").style.backgroundColor = 'yellow';  
      }
  
    }  else if(memberC == memberB && memberC > memberA){
      winner = `The winner : Member B`;
      document.getElementById("member-a").style.backgroundColor = 'green';
      document.getElementById("member-b").style.backgroundColor = 'blue';
      document.getElementById("member-c").style.backgroundColor = 'blue';  
  
    }
    
    else if(memberC == memberA && memberC < memberB){
      winner = `The winner : Member B`;
      document.getElementById("member-b").style.backgroundColor = 'green';
      document.getElementById("member-a").style.backgroundColor = 'blue';
      document.getElementById("member-c").style.backgroundColor = 'blue';  
  
    }
    else if(memberC == memberB && memberC < memberA){
      winner = `The winner : Member A`;
      document.getElementById("member-a").style.backgroundColor = 'green';
      document.getElementById("member-b").style.backgroundColor = 'blue';
      document.getElementById("member-c").style.backgroundColor = 'blue';  
    }
    else if(memberB == memberA && memberB < memberC){
      winner = `The winner : Member C`;
      document.getElementById("member-c").style.backgroundColor = 'green';
      document.getElementById("member-a").style.backgroundColor = 'blue';
      document.getElementById("member-b").style.backgroundColor = 'blue';  
    }
    else if(memberA==memberB==memberC){
      winner = "It's a draw!";
      document.getElementById("member-c").style.backgroundColor = 'blue';
      document.getElementById("member-a").style.backgroundColor = 'blue';
      document.getElementById("member-b").style.backgroundColor = 'blue'; 
    }
    else if(memberA==memberB && memberA>memberC){
      winner = "It's a draw!";
      document.getElementById("member-c").style.backgroundColor = 'red';
      document.getElementById("member-a").style.backgroundColor = 'blue';
      document.getElementById("member-b").style.backgroundColor = 'blue'; 
    }
    else if(memberB==memberC && memberB>memberA){
      winner = "It's a draw!";
      document.getElementById("member-a").style.backgroundColor = 'red';
      document.getElementById("member-c").style.backgroundColor = 'blue';
      document.getElementById("member-b").style.backgroundColor = 'blue'; 
    }
    else if(memberA==memberC && memberA>memberB){
      winner = "It's a draw!";
      document.getElementById("member-b").style.backgroundColor = 'red';
      document.getElementById("member-a").style.backgroundColor = 'blue';
      document.getElementById("member-c").style.backgroundColor = 'blue'; 
    }
    document.getElementById("winner").innerHTML = winner;
  };


  window.onload = function () {
    document.getElementById("roll").addEventListener("click",roll);
    function roll(){
    let val1 = memberA();
    let val2 = memberB();
    let val3 = memberC();
    document.getElementById("member-a").value=val1;
    document.getElementById("member-b").value=val2;
    document.getElementById("member-c").value=val3;
     findWinner(val1,val2,val3);
    }
    
    
  };

  



if (typeof exports !== "undefined") {
  module.exports = {
    memberA,
    memberB,
    memberC,
    findWinner,
  };
}
