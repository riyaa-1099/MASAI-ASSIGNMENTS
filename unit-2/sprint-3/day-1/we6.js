let inp =[1, 2, 3, 4, 5, 6]
let div=function(el){
    return el%3==0;
}
let cube=function(el){
    return el**3;
}
let sum=function(acc,el){
    return acc+el;
}
let res= inp.filter(div).map(cube).reduce(sum)
console.log(res)