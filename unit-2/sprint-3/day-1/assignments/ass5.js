let num=[2, 4, 5, 3, 6, 8];

let res=function(el,i){
  return  (i%2==0 && el%2==0)
}
let final= num.filter(res).map(function(el,i){
    return el;
})
console.log(final)