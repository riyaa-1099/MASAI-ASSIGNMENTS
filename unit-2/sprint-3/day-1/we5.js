let nums=[1,2,3];
let res=nums.filter(function(el){
    return el%2==1;
}).reduce(function(acc,el){
    return acc+el;
})
console.log(res)