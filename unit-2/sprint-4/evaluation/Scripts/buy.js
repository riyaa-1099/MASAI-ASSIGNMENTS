let myTicket=JSON.parse(localStorage.getItem("bookings"));
displayTable(myTicket);

function displayTable(res){
document.querySelector("tbody").innerHTML=""

res.forEach(function (el) {
    
    let tr=document.createElement("tr");
    
    let td1=document.createElement("td");
    td1.innerText=el.movie_name;
    
    let td2=document.createElement("td");
    td2.innerText=el.movie_actor;
    
    let td3=document.createElement("td");
    td3.innerText=el.movie_desc;
    
    let td4=document.createElement("td");
    td4.innerText=el.movie_release;
    
    let td5=document.createElement("td");
    td5.innerText=el.movie_category;
    
    let td6=document.createElement("td");
    td6.innerText=el.movie_price;

    tr.append(td1,td2,td3,td4,td5,td6);
    document.querySelector("tbody").append(tr);
 });

}