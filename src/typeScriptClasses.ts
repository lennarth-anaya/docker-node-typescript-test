
export class Animal {
  static numOfAnimals: number = 0;
  public favFood: string;

  // private constructor parameters will create private atts automatically on TypeScript
  constructor(private name: string, private owner: string) {
    Animal.numOfAnimals++;
  }

  getOwnerInfo() {
    return this.owner;
  }

  static howManyAnimals(): number {
    return Animal.numOfAnimals;
  }

  // GETTERS/SETTERS
  private _weight: number;
  get weight(): number {
    return this._weight;
  }
  set weight(weight: number) {
    this._weight = weight;
  }
};

var spot = new Animal("Spot", "Doug");

export default function show() {
  console.log(`
  * Classes

    Having next definition of a class:
    -------------------------------------------------------------------------------
    | class Animal {
    |   static numOfAnimals: number = 0;
    |   public favFood: string;
    |
    |   // private constructor parameters will create private atts automatically on TypeScript
    |   constructor(private name: string, private owner: string) {
    |     Animal.numOfAnimals++;
    |   }
    |
    |   getOwnerInfo() {
    |     return this.owner;
    |   }
    |
    |   static howManyAnimals(): number {
    |     return Animal.numOfAnimals;
    |   }
    |
    |   // GETTERS/SETTERS
    |   private _weight: number;
    |   get weight(): number {
    |     return this._weight;
    |   }
    |   set weight(weight: number) {
    |     this._weight = weight;
    |   }
    | }
    -------------------------------------------------------------------------------

    We can use it like next:

    var spot = new Animal("Spot", "Doug");
    // Access auto-generated private member with a public method:
    spot.getOwnerInfo(); -----------------------> ${spot.getOwnerInfo()}
    // Set value with setter:
    spot.weight = ${spot.weight = 100};
    // Get that value with its getter:
    console.log("Weight: " + spot.weight); ------> ${spot.weight}
    // Access static member value with a static method:
    console.log("# of animals: " + Animal.howManyAnimals()); --> ${Animal.howManyAnimals()}
  `);  
}
