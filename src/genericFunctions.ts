
import {Vehicle, Car} from './interfaces';

function getType<T>(val: T): string {
  return typeof(val);
}

function getWheels<w extends Vehicle>(veh: w): number {
  return veh.drive();
}

let car = new Car(4);

export default function show() {
  console.log(`
    * Generic Functions

      Having next definition of generic functions:
      -------------------------------------------------------------------------------
      |// Typical use (prints out the type of the parameter sent):
      |function getType<T>(val: T): string {
      |  return typeof(val);
      |}
      |
      |// Interfaces extension (safely accesses one attribute that belongs to vehicle):
      |function getWheels<w extends Vehicle>(veh: w): number {
      |  return veh.drive();
      |}
      -------------------------------------------------------------------------------

      We can use the former like next with direct types:

      // prints out the type of the parameters sent
      console.log( "Type 1:" + getType("one string") ); ---> ${getType("one string")}
      console.log( "Type 2:" + getType(123) );          ---> ${getType(123)}

      And the second one with custom types and interfaces:

      let car = new Car(4);
      // safely accesses one attribute that belongs to vehicle
      getWheels(car);                                   ---> ${getWheels(car)}
  `);  
}
