class Vehicle {
    constructor(type, registrationNumber, color) {
        this.type = type;
        this.registrationNumber = registrationNumber;
        this.color = color;
    }
}

class Car extends Vehicle {
    constructor(registrationNumber, color) {
        super("Car", registrationNumber, color)
    }
}

class Bike extends Vehicle {
    constructor(registrationNumber, color) {
        super("Bike", registrationNumber, color)
    }
}

class Bus extends Vehicle {
    constructor(registrationNumber, color) {
        super("Bus", registrationNumber, color)
    }
}

//let c1= new Bike("lgker","blue")
//console.log("c1:",c1)

class Slot {
    constructor(type, number) {
        this.number = number;
        this.type = type;

        this.isBooked = false;
    }
}

class ParkingFloor {
    constructor(floorNumber, maxLimit) {
        this.floorNumber = floorNumber;
        this.maxLimit = maxLimit;
         this.parkingSpots=[];
        for(let i=0;i<maxLimit;i++){
        if(i===0){this.parkingSpots.push(new Slot("Bus",i+1));}
        else if(i===1){this.parkingSpots.push(new Slot("Bike",i+1));}
        else if(i===2){this.parkingSpots.push(new Slot("Bike",i+1));}
        else if(i===3){this.parkingSpots.push(new Slot("Car",i+1));}
        }

        this.vacantParkingSpots = [];
    

for(let i=0;i<maxLimit;i++){
if(i==0 && this.parkingSpots[i].isBooked===false){
    this.vacantParkingSpots.push(new Slot("Bus",i+1))
}
else if(i===1 && this.parkingSpots[i].isBooked===false){
    this.vacantParkingSpots.push(new Slot("Bike",i+1))
}
else if(i===2 && this.parkingSpots[i].isBooked===false){
    this.vacantParkingSpots.push(new Slot("Bike",i+1))
}
else if(i===3 && this.parkingSpots[i].isBooked===false){
    this.vacantParkingSpots.push(new Slot("Car",i+1))
}
}

}
displayAvailableSlots(){
    this.vacantParkingSpots = [];
    for (let val of this.parkingSpots) {
        if (val.isBooked === false) {
            this.vacantParkingSpots.push(val)
        }
    }
    return this.vacantParkingSpots;
}

parkVehicle(Vehicle){
    // let Slot=this.displayAvailableSlots()


    for (let i = 0; i < this.maxLimit; i++) {
        if (this.parkingSpots[i].type == Vehicle.type && this.parkingSpots[i].isBooked == false) {
            this.parkingSpots[i].isBooked = true;
            this.displayAvailableSlots()


            return;
        }

    }
    return console.log(`${Vehicle.type} slots are full`);
}
}
pf1=new ParkingFloor(1,4) 


//export { Vehicle, Car, Bike, Bus, Slot, ParkingFloor }

let c1= new Bike("lgker","blue")

p1= pf1.parkVehicle(c1)
pf1.parkVehicle(c1)
console.log(pf1)
