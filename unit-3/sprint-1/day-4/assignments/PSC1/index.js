<<<<<<< HEAD
function Student(n, c, u, i, b){
    this.name = n;
    this.course=c;
    this.unit=u;
    this.image=i;
    this.batch=`Ft-Web${b}`;
}
let form = document.getElementById("students_data");  
form.addEventListener("submit",storeData);
let data=JSON.parse(localStorage.getItem("students"))||[];

function storeData(e){
    e.preventDefault();

let name = form.name.value;
let course = form.course.value;
let unit = form.unit.value;
let image = form.image.value;
let batch= form.batch.value;

let s1= new Student(name,course,unit,image,batch);

data.push(s1);

localStorage.setItem("students",JSON.stringify(data));
calculate()
}
let str="";
function calculate(){
let data=JSON.parse(localStorage.getItem("students"))||[];
let obj={};
for(let i=0;i<data.length;i++){
if(!obj[data[i].batch]){
obj[data[i].batch] = 0;
}
}
let arr=[];
let nav= document.getElementById("navbar");
for(let i=0;i<data.length;i++){
    obj[data[i].batch]++;
    } 

    for(let key in obj){
        arr.push(key+":"+obj[key])
       
    }
    nav.innerHTML=arr;
}
 
   

=======
function Student(n, c, u, i, b){
    this.name = n;
    this.course=c;
    this.unit=u;
    this.image=i;
    this.batch=`Ft-Web${b}`;
}
let form = document.getElementById("students_data");  
form.addEventListener("submit",storeData);
let data=JSON.parse(localStorage.getItem("students"))||[];

function storeData(e){
    e.preventDefault();

let name = form.name.value;
let course = form.course.value;
let unit = form.unit.value;
let image = form.image.value;
let batch= form.batch.value;

let s1= new Student(name,course,unit,image,batch);

data.push(s1);

localStorage.setItem("students",JSON.stringify(data));
calculate()
}
let str="";
function calculate(){
let data=JSON.parse(localStorage.getItem("students"))||[];
let obj={};
for(let i=0;i<data.length;i++){
if(!obj[data[i].batch]){
obj[data[i].batch] = 0;
}
}
let arr=[];
let nav= document.getElementById("navbar");
for(let i=0;i<data.length;i++){
    obj[data[i].batch]++;
    } 

    for(let key in obj){
        arr.push(key+":"+obj[key])
       
    }
    nav.innerHTML=arr;
}
 
   

>>>>>>> e15b2a3e488058d4b3f5faf800454f0800d8bdbc
