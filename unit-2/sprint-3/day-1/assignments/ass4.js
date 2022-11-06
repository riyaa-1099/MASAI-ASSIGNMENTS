let x=["A", "Good", "Problem"];
let odd=function(el,i){
    return  (el.length%2 !== 0);
}
let res= x.filter(odd).reduce(function(acc,el,i){
return (acc+ el.length)
},0)
console.log(res)