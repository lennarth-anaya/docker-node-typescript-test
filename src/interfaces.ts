
export interface Vehicle {
  drive(): any;
};

export class Car implements Vehicle {
  constructor(private wheels: number){}
  drive(): string {
    return "Driving with " + this.wheels + " wheels";
  }
};

let car = new Car(4);
let bike = new Car(2);

export default function show() {
  console.log(`
    * Interfaces

      Having next definition of an interface:
      -------------------------------------------------------------------------------
      |interface Vehicle {
      |  drive(): any;
      |}
      |
      |class Car implements Vehicles {
      |  constructor(private wheels: number){}
      |  drive(): void {
      |    console.log("Driving with " + this.wheels + " wheels");
      |  }
      |}
      -------------------------------------------------------------------------------

      We can make use of it like next:

      const car = new Car(4);
      const bike = new Car(2);
      car.drive();  -----> ${car.drive()}
      bike.drive(); -----> ${bike.drive()}
  `);
}
