import { navbar, carousel, loader , appendMovies } from "./navbar.js";

let navbar_div=document.getElementById("navbar");
navbar_div.innerHTML=navbar();

let carousel_div=document.getElementById("carousel");
carousel_div.innerHTML=carousel();



async function searchMovies() {

     // http://www.omdbapi.com/?apikey=[1e7ac66c]&s=avengers
   
   try{
 let movie_name = document.getElementById('query').value;
 let response = await fetch(`https://www.omdbapi.com/?apikey=f3d5c71f&s=${movie_name}`);
let data= await response.json();
 console.log("data:",data.Search);
let actual_data=data.Search;

// console.log("actual_data:",actual_data);
appendMovies(actual_data);
let load=  document.getElementById("loader")
load.style.display='none';
    }
    
    catch(err){
console.log('err',err);

    }
}
// //     response
// //         .then(function (success) {
// //             let data = success.json();
// //             data
// //                 .then(function (success) {

// //                     console.log('success:', success);
// //                     appendMovies(success.Search)
// //                 })
// //                 .catch(function (error) {
// //                     console.log('error', error);
// //                 });
// //         })
// //         .catch(function (error) {
// //             console.log('error', error);
// //         });
// // }


// function appendMovies(data) {
//     // let loader_div=document.getElementById('loader_div');
//     // loader_div.style.display='none';

//    let movies_div=document.getElementById("movies");

//    movies_div.innerHTML=null;
// //    movies_div.id="movies";

// data.forEach(function(el){
//     let div=document.createElement('div');

//     let p_name=document.createElement('p');
//     p_name.innerHTML=`Name: ${el.Title}`;
    
//      let p_release=document.createElement('p');
//      p_release.innerHTML=`Year: ${el.Year}`;

//      let p_imdb=document.createElement('p');
//      p_imdb.innerHTML=`imdbID: ${el.imdbID}`;

    
//     let img=document.createElement('img');
//     img.id="poster";
//     img.src=el.Poster;
    
//     div.append(img, p_name,p_release,p_imdb);
//     movies_div.append(div);

// });

// }
let input_movie=document.getElementById("searchMovies");
input_movie.addEventListener("click",function(){
  searchMovies();
})

let input_box=document.getElementById("query");
input_box.addEventListener("input",function(){
    debouncing(searchMovies,2000)
  let load=  document.getElementById("loader")
  load.innerHTML=loader()
})
let timerId;

function debouncing(func,delay){
if(timerId){
    clearTimeout(timerId);
}
   timerId= setTimeout(function(){
func();

    },delay);
}