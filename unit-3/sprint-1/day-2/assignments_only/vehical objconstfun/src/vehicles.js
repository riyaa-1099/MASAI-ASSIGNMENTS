// Function constructor
function FourWheeler(model, color, speed, fuel) {
    this.wheels=4;
    this.model=model;
    this.color=color;
    this.speed=speed;
    this.fuel=fuel;
}

// Parent object fro Object.create
let FourWheelerObject = {

wheels:4,
 model:"benz",
color:"blue",
 speed:"400kmph",
 fuel:"50lt",

 setSpeed(speed){
this.speed=speed
 },
 updateColor(color){
    this.color=color
     },
     updateFuel(fuel){
        this.fuel=fuel
         }
}


// FourWheelerObject.speed.call(setSpeed)


FourWheeler.prototype.setSpeed=function(speed){
    this.speed=speed
}
FourWheeler.prototype.updateColor=function(color){
    this.color=color
}
FourWheeler.prototype.updateFuel=function(fuel){
    this.fuel=fuel
}

// Store function contructor object here
var car1= new FourWheeler("cr8","blue","250kmph","50lt")

// Store Object.create here
var car2= Object.create(FourWheelerObject) 


export {car1, car2}