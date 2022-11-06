let users = [
    { firstName: "Nrupul", lastName: "Dev", place: "Banglore" },
    { firstName: "Prateek", lastName: "Shukla", place: "Banglore" },
    { firstName: "Yogesh", lastName: "Bhat", place: "Kolkata" },
  ];
  let res=users.map(function(el,i){
    let x= el.firstName+" "+el.lastName;
    return x;
  })
  console.log(res)