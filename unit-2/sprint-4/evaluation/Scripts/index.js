// Write All Home  Page Script Here
document.querySelector("form").addEventListener("submit",movieApply);

let movieArr=JSON.parse(localStorage.getItem("movie-list")) || [];

function movieApply(event){
event.preventDefault();

let movieObj = {
movie_name:document.querySelector("#name").value,
movie_actor:document.querySelector("#mainActor").value,
movie_desc:document.querySelector("#desc").value,
movie_release:document.querySelector("#release").value,
movie_category:document.querySelector("#category").value,
movie_price:document.querySelector("#price").value,
};
movieArr.push(movieObj);
localStorage.setItem("movie-list",JSON.stringify(movieArr));

}