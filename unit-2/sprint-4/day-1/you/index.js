// All the JS Code for the Add Students Page Goes Here
let form =document.querySelector("form");
 
let LSData = JSON.parse(localStorage.getItem("admission")) || [];

form.addEventListener("submit",function(e){
e.preventDefault();
if(form.name.value===""||form.email.value===""||form.gender.value===""||form.phone.value===""||form.course.value===""){
alert("please fill all the field");
}
else{
    let obj={
 name:form.name.value,
email:form.email.value,
 gender:form.gender.value,
 phone:form.phone.value,
course:form.course.value,
};

LSData.push(obj);
localStorage.setItem("admission",JSON.stringify(LSData));
}

})