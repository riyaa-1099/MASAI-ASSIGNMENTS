// All the Code for All Students Page Goes Here

let LSData = JSON.parse(localStorage.getItem("admission")) || [];

let tbody=document.querySelector("tbody");
let category = document.getElementById("filter");

function displayTable(data){

tbody.innerHTML= null;
data.forEach(function(element,index){
let tr= document.createElement("tr");
let name= document.createElement("td");
name.innerText=element.name;
let email= document.createElement("td");
email.innerText=element.email;
let course= document.createElement("td");
course.innerText=element.course;
let gender= document.createElement("td");
gender.innerText=element.gender;
let phone= document.createElement("td");
phone.innerText=element.phone;

let accept= document.createElement("td");
accept.innerText="Accept";
accept.addEventListener("click",function(){
    addData("admission-accepted",element);
removeData(LSData,index);
})

let reject= document.createElement("td");
reject.innerText="Reject";
reject.addEventListener("click",function(){
    addData("admission-rejected",element);
    removeData(LSData,index);
})

tr.append(name,email,course,gender,phone,accept,reject);
tbody.append(tr)

})
}
displayTable(LSData);

function addData(key,value){
    let newLSData = JSON.parse(localStorage.getItem(key)) || [];
    newLSData.push(value);
    localStorage.setItem(key,JSON.stringify(newLSData));
};

function removeData(data,index){
LSData= data.filter(function(el,i){
    return i != index;
})    
localStorage.setItem("admission",JSON.stringify(LSData));
displayTable(LSData);
}


category.addEventListener("change",function(){
    if(category.value===""||category.value=='all'){
        displayTable(LSData);
    }
    else{
    let filteredData =LSData.filter(function(e){
        return e.course===category.value;
    
    })
    displayTable(filteredData)
}
})
