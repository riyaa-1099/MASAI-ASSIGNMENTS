// Function constructor
function FourWheeler(model, color, speed, fuel) {
    this.car_model=model;
    this.car_color=color;
    this.car_speed=speed;
    this.car_fuel=fuel;

}


// Parent object fro Object.create
let FourWheelerObject = {
    car_model:model,
    car_color:color,
    car_speed:speed,
    car_fuel:fuel
}

FourWheeler.prototype.setSpeed=function(speed){
    this.car_speed=speed
}
FourWheeler.prototype.updateColor=function(color){
    this.car_color=color
}
FourWheeler.prototype.updateFuel=function(fuel){
    this.car_fuel=fuel
}

// Store function contructor object here
var car1= new FourWheeler("cr8","blue","250kmph","50lt")

car1.setSpeed("400kmph")
car1.updateColor("green")
car1.updateFuel("400lt")
// Store Object.create here
var car2= Object.create(FourWheelerObject) 

export {car1, car2}