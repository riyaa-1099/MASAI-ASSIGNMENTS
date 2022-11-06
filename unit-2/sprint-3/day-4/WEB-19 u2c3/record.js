let form =document.querySelector("form");
form.addEventListener("submit",todo);


function todo(event){
event.preventDefault();
 let obj ={
 name: form.name.value,
  id: form.employeeID.value,
spec: form.department.value,
exp: form.exp.value,
email: form.email.value,
mob: form.mbl.value

 };

 let tRow=document.createElement("tr");

 let name=document.createElement("td")
 name.innerText=obj.name;

 let id=document.createElement("td")
 id.innerText=obj.id;

 let spec=document.createElement("td")
 spec.innerText=obj.spec;

 let exp=document.createElement("td")
 exp.innerText=obj.exp;

 let email=document.createElement("td")
 email.innerText=obj.email;

 let mob=document.createElement("td")
 mob.innerText=obj.mob;

 let role=document.createElement("td");
 if(obj.exp>5){
    role.innerText="Senior";
 }
 else if(obj.exp>=2){
    role.innerText="Junior";
 }
 else if(obj.exp<=1){
    role.innerText="Fresher";
 }

 let deleteEle =document.createElement("td");
deleteEle.innerText="Delete";
deleteEle.addEventListener("click",function(e){
    e.target.parentNode.remove();
})

tRow.append(name,id,spec,exp,email,mob,role,deleteEle);
document.querySelector("tbody").append(tRow);

}// fill in javascript code here