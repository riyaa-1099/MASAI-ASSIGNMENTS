let users = [
    { firstName: "Nrupul", lastName: "Dev", place: "Banglore" },
    { firstName: "Prateek", lastName: "Shukla", place: "Banglore" },
    { firstName: "Yogesh", lastName: "Bhat", place: "Kolkata" },
  ];

  let place=function(el){
    return el.place=="Banglore";
  }
  let res=users.filter(place).map(function(el,i){
    return el.firstName+" "+el.lastName;
  })
  console.log(res)
