<<<<<<< HEAD
let form=document.querySelector("form");
form.addEventListener("submit",formSubmit);

var studentDetails=JSON.parse(localStorage.getItem("studentData"))||[];

if(JSON.parse(localStorage.getItem("studentData"))==undefined){
    head=document.getElementById("head");
    head.innerHTML="Sign-Up";
    head.style.color="gray";}
    else{
            head=document.getElementById("head");
            head.innerHTML="Sign-In";
            head.style.color="blue";
    }

function formSubmit(event){
event.preventDefault();

    email=document.getElementById("email").value;
   mobile=document.getElementById("number").value;
    password=document.getElementById("password").value;
if(JSON.parse(localStorage.getItem("studentData"))==undefined){
   
    if (email == "" || mobile == "" || password == "") {
        alert("Please Enter All Details For SignUp");
      } else {
        let obj = { email: email, mobile: mobile, password: password };
        studentDetails=(obj);
        localStorage.setItem("studentData", JSON.stringify(studentDetails));
        alert("Hurray...! Sign Up Sucessful");
      
    }
}
else{
if (email == "" || mobile == "" || password == "") {
    alert("Please Enter All Details For SignIn");
  } else {
  
    
      if (
        email == studentDetails.email &&
        mobile == studentDetails.mobile &&
        password == studentDetails.password
      ) {
        alert("Login Sucessfull");
      }
    
     else {
      alert("oops! User Does Not Exist ! Try Again");
    }
  }


}
=======
let form=document.querySelector("form");
form.addEventListener("submit",formSubmit);

var studentDetails=JSON.parse(localStorage.getItem("studentData"))||[];

if(JSON.parse(localStorage.getItem("studentData"))==undefined){
    head=document.getElementById("head");
    head.innerHTML="Sign-Up";
    head.style.color="gray";}
    else{
            head=document.getElementById("head");
            head.innerHTML="Sign-In";
            head.style.color="blue";
    }

function formSubmit(event){
event.preventDefault();

    email=document.getElementById("email").value;
   mobile=document.getElementById("number").value;
    password=document.getElementById("password").value;
if(JSON.parse(localStorage.getItem("studentData"))==undefined){
   
    if (email == "" || mobile == "" || password == "") {
        alert("Please Enter All Details For SignUp");
      } else {
        let obj = { email: email, mobile: mobile, password: password };
        studentDetails=(obj);
        localStorage.setItem("studentData", JSON.stringify(studentDetails));
        alert("Hurray...! Sign Up Sucessful");
      
    }
}
else{
if (email == "" || mobile == "" || password == "") {
    alert("Please Enter All Details For SignIn");
  } else {
  
    
      if (
        email == studentDetails.email &&
        mobile == studentDetails.mobile &&
        password == studentDetails.password
      ) {
        alert("Login Sucessfull");
      }
    
     else {
      alert("oops! User Does Not Exist ! Try Again");
    }
  }


}
>>>>>>> e15b2a3e488058d4b3f5faf800454f0800d8bdbc
}