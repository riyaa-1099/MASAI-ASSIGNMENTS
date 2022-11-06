<<<<<<< HEAD
let APIKEY="rKLc3WelDRhAkvbf4OqT6sgDUtuqxP80";

const main=async()=>{
try{
let response= await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${APIKEY}&limit=25&rating=g`)
let data=await response.json();
append(data.data)
//console.log(data.data);
}
catch(error){
    console.log(error)
}

};
main();


const append= async(data)=>{
data.forEach((e)=>{
let gif=document.getElementById("gif");
let img=document.createElement("img");
img.src=e.images.downsized.url;
//console.log(e.id)
img.addEventListener('click',()=>{
    details_gif(e.gif.id);
})
gif.append(img)
})

}

const details_gif=(id)=>{
localStorage.setItem("details",JSON.stringify(id));
window.location.href="/gif_details.html"   
}
//random

const random=async()=>{
let gif=document.getElementById("gif");
gif.innerHTML=null;
try{
   let res= await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${APIKEY}&limit=10&rating=g`)
   //let res= await fetch(`https://api.giphy.com/v1/gifs/random?api_key=rKLc3WelDRhAkvbf4OqT6sgDUtuqxP80&tag=god&rating=r`)
 let result=await res.json();
    
    //console.log(result);
    let img=document.createElement("img");
    img.src=result.data.images.downsized.url;
    img.addEventListener("click",()=>{
        details_gif(result.data.id)
    })
    gif.append(img)
}
catch(error){
console.log(error)
}

}

const categories=async()=>{
let gif=document.getElementById("gif");
gif.innerHTML=null;
try{
let res=await fetch(`https://api.giphy.com/v1/gifs/categories?api_key=${APIKEY}`);

let result=await res.json();
//console.log(result)
localStorage.setItem("categories",JSON.stringify(result.data))

let sortZ_A=document.createElement("button");
sortZ_A.innerText="Z-A";
sorting.append(sortZ_A)

let sortA_Z=document.createElement("button");
sortA_Z.innerText="A-Z";
sorting.append(sortA_Z)

let dum;
sortA_Z.onclick=()=>{
    sorting_cat(dum=false);
}

sortZ_A.onclick=()=>{
    sorting_cat(dum=true);
}

//console.log(result.data)
result.data.forEach((e)=>{
    let name=document.createElement("p");
    name.innerHTML=e.name;
    let img=document.createElement("img");
    img.src=e.gif.images.downsized.url;
    img.addEventListener("click",()=>{
    details_gif(e.gif.id)
    })
gif.append(name,img);
});

}
catch(error){
console.log(error)
}

}

const sorting_cat=(dum)=>{
let data=JSON.parse(localStorage.getItem("categories"));
//console.log(data)
if(dum==true){
    data=data.reverse();
}
let gif=document.getElementById("gif");
gif.innerHTML=null;

data.forEach((e)=>{
let name = document.createElement("p");
name.innerHTML=e.name;
let image=document.createElement("img");
image.src=e.gif.images.downsized.url;
image.addEventListener("click",()=>{
details_gif(e.gif.id)
})
gif.append(name,image);
})
}


let input_box=document.getElementById("search");
let search=input_box.value;
input_box.addEventListener("input",function(){
debouncing(gif,2000)
})

let timerId;
function debouncing(func,delay){
if(timerId){
    clearTimeout(timerId)
}
timerId=setTimeout(function(){
    func();
},delay);
}

const gif =async()=>{
    let gif=document.getElementById("gif");
    gif.innerHTML=null;
    let input_box=document.getElementById("search");
 let searchv=input_box.value;
try{
let res=await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&q=${searchv}&limit=25&offset=0&rating=g&lang=en`)
let response=await res.json()
console.log(response.data)

response.data.forEach(e=>{
let name=document.createElement("p");
name.innerHTML=e.title;

let image=document.createElement("img")
image.src=e.images.downsized.url;

image.addEventListener("click",()=>{
    details_gif(e.id);
})
gif.append(name,image)
})

}
catch(error){
console.log(error)
}
}


const translates =async()=>{
    let gif=document.getElementById("gif");
    gif.innerHTML=null;
    let input_box=document.getElementById("search");
 let searchv=input_box.value;
try{
    if(searchv==""){
        alert("Please provide your input.")
    }
let res=await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&s=${searchv}`)
let response=await res.json()
console.log(response.data)

response.data.forEach(e=>{
let name=document.createElement("p");
name.innerHTML=e.title;

let image=document.createElement("img")
image.src=e.images.downsized.url;
image.addEventListener("click",()=>{
    details_gif(e.id);
})
gif.append(name,image)
})

}
catch(error){
console.log(error)
}
=======
let APIKEY="rKLc3WelDRhAkvbf4OqT6sgDUtuqxP80";

const main=async()=>{
try{
let response= await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${APIKEY}&limit=25&rating=g`)
let data=await response.json();
append(data.data)
//console.log(data.data);
}
catch(error){
    console.log(error)
}

};
main();


const append= async(data)=>{
data.forEach((e)=>{
let gif=document.getElementById("gif");
let img=document.createElement("img");
img.src=e.images.downsized.url;
//console.log(e.id)
img.addEventListener('click',()=>{
    details_gif(e.gif.id);
})
gif.append(img)
})

}

const details_gif=(id)=>{
localStorage.setItem("details",JSON.stringify(id));
window.location.href="/gif_details.html"   
}
//random

const random=async()=>{
let gif=document.getElementById("gif");
gif.innerHTML=null;
try{
   let res= await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${APIKEY}&limit=10&rating=g`)
   //let res= await fetch(`https://api.giphy.com/v1/gifs/random?api_key=rKLc3WelDRhAkvbf4OqT6sgDUtuqxP80&tag=god&rating=r`)
 let result=await res.json();
    
    //console.log(result);
    let img=document.createElement("img");
    img.src=result.data.images.downsized.url;
    img.addEventListener("click",()=>{
        details_gif(result.data.id)
    })
    gif.append(img)
}
catch(error){
console.log(error)
}

}

const categories=async()=>{
let gif=document.getElementById("gif");
gif.innerHTML=null;
try{
let res=await fetch(`https://api.giphy.com/v1/gifs/categories?api_key=${APIKEY}`);

let result=await res.json();
//console.log(result)
localStorage.setItem("categories",JSON.stringify(result.data))

let sortZ_A=document.createElement("button");
sortZ_A.innerText="Z-A";
sorting.append(sortZ_A)

let sortA_Z=document.createElement("button");
sortA_Z.innerText="A-Z";
sorting.append(sortA_Z)

let dum;
sortA_Z.onclick=()=>{
    sorting_cat(dum=false);
}

sortZ_A.onclick=()=>{
    sorting_cat(dum=true);
}

//console.log(result.data)
result.data.forEach((e)=>{
    let name=document.createElement("p");
    name.innerHTML=e.name;
    let img=document.createElement("img");
    img.src=e.gif.images.downsized.url;
    img.addEventListener("click",()=>{
    details_gif(e.gif.id)
    })
gif.append(name,img);
});

}
catch(error){
console.log(error)
}

}

const sorting_cat=(dum)=>{
let data=JSON.parse(localStorage.getItem("categories"));
//console.log(data)
if(dum==true){
    data=data.reverse();
}
let gif=document.getElementById("gif");
gif.innerHTML=null;

data.forEach((e)=>{
let name = document.createElement("p");
name.innerHTML=e.name;
let image=document.createElement("img");
image.src=e.gif.images.downsized.url;
image.addEventListener("click",()=>{
details_gif(e.gif.id)
})
gif.append(name,image);
})
}


let input_box=document.getElementById("search");
let search=input_box.value;
input_box.addEventListener("input",function(){
debouncing(gif,2000)
})

let timerId;
function debouncing(func,delay){
if(timerId){
    clearTimeout(timerId)
}
timerId=setTimeout(function(){
    func();
},delay);
}

const gif =async()=>{
    let gif=document.getElementById("gif");
    gif.innerHTML=null;
    let input_box=document.getElementById("search");
 let searchv=input_box.value;
try{
let res=await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&q=${searchv}&limit=25&offset=0&rating=g&lang=en`)
let response=await res.json()
console.log(response.data)

response.data.forEach(e=>{
let name=document.createElement("p");
name.innerHTML=e.title;

let image=document.createElement("img")
image.src=e.images.downsized.url;

image.addEventListener("click",()=>{
    details_gif(e.id);
})
gif.append(name,image)
})

}
catch(error){
console.log(error)
}
}


const translates =async()=>{
    let gif=document.getElementById("gif");
    gif.innerHTML=null;
    let input_box=document.getElementById("search");
 let searchv=input_box.value;
try{
    if(searchv==""){
        alert("Please provide your input.")
    }
let res=await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&s=${searchv}`)
let response=await res.json()
console.log(response.data)

response.data.forEach(e=>{
let name=document.createElement("p");
name.innerHTML=e.title;

let image=document.createElement("img")
image.src=e.images.downsized.url;
image.addEventListener("click",()=>{
    details_gif(e.id);
})
gif.append(name,image)
})

}
catch(error){
console.log(error)
}
>>>>>>> e15b2a3e488058d4b3f5faf800454f0800d8bdbc
}