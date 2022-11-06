let form=document.querySelector('form');
let LSData = JSON.parse(localStorage.getItem("jobList")) || [];

form.addEventListener('submit',function(e){
e.preventDefault();
if(form.name.value===""||form.email.value===""||form.salary.value===""||form.role.value===""){
    alert("please fill all the field");
    }
    else{
        let obj={
    name:form.name.value,
    email:form.email.value,
    salary:form.salary.value,
    role:form.role.value,
    };
LSData.push(obj);
localStorage.setItem("jobList",JSON.stringify(LSData));
    }
})