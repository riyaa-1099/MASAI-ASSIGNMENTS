let str=["assignment", "problem", "media", "upload"];
let red=function(el,i){
    if(el[0]=="a"|| el[el.length-1] =="a"){
        return el
    }
}
let res=str.filter(red).map(function(el,i){
return (el);
})
console.log(res)