class Vehicle {

constructor(t, r){
    this.type=t;
    this.regNumber=r;
  }
}
class Car extends Vehicle{
constructor(r){
    super('Car',r);
}

}
class Bike extends Vehicle{
    constructor(r){
        super('Bike',r);
    }
 }
    class Bus extends Vehicle{
        constructor(r){
            super('Bus',r);
        }
    }


// let c1 = new Bike('RJo564');
// console.log('c1:',c1);

class Slot{
constructor(n, t){
this.number = n;
this.type = t;
this.isBooked = false;
  }
}

class ParkingFloor{
constructor(floorNumber,maxSlots){
let floor = [{},{},{}]
this.floorNumber = floorNumber;
this.ParkingSlots = [];//storage for slots storing
// this.ParkingSlots[0] = new Slot(1,'Bus')
// this.ParkingSlots[1] = new Slot(2,'Car')
// this.ParkingSlots[1] = new Slot(3,'Bike')

for(let i=0;i<maxSlots;i++){
if(i===0){
this.ParkingSlots.push(new Slot(i+1,'Bus'))

}
else if(i===1){
    this.ParkingSlots.push(new Slot(i+1,'Bike'))
    
    }
    else{
        this.ParkingSlots.push(new Slot(i+1,'Car'))
        
        }
   }
 }
}
let pf1=new ParkingFloor(1,3);


class ParkingArea{

constructor(maxFloors){
this.floors=[];
this.numberofFloors=maxFloors
//this.floors[0]= new ParkingFloor(1,3)
for(let i=0;i<maxFloors;i++){
this.floors[i]=new ParkingFloor(i+1,3);

   }
 }

findSlot(type){
for(let i=0;i<this.numberofFloors;i++){
for(let slot of this.floors[i].ParkingSlots){
if(slot.type === type && slot.isBooked!==true){

    return { floorNumber:i+1, found_slot:slot };
}


}
  }
  return false;
 }
 bookSlot(vehicle){
    let slot= this.findSlot(vehicle.type);

    if(slot ===false){
        console.log('All slots are full');
        return false;
    }
slot.found_slot.isBooked=true;

//console.log('slot:',slot);

 }
}
let p1=new ParkingArea(3);
let c1=new Car('mh12 bt6723')

p1.bookSlot(c1);

console.log('p1:',p1)