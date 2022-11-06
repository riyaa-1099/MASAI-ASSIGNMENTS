
const getUsersData = async () => {
  try {
   let response =await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-users`)
let datamy=await response.json()
return datamy;
//console.log(datamy)
  } catch (err) {
    console.log("err:",err)
  }
};



function splitData(...cData){
  let [data,totalPages]=cData
  let [data1,data2,...data3]=data
console.log(data);

  return {
    totalPages,
    data1,
    data2,
    data3,
  }
}



// donot change the export statement
if (typeof exports !== "undefined") {
  module.exports = {
    getUsersData,
    splitData,
  };
}
