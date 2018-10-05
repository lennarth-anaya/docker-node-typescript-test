
import {Animal} from './typeScriptClasses';

export class Dog extends Animal {
  constructor(name: string, owner: string) {
    super(name, owner);
    Dog.numOfAnimals++;
  }
};

var grover = new Dog("Grover", "Jimmy");

export default function show() {
  console.log(`
    * Extending classes

      Having next definition of a class (see Animal's in TypeScript Classes Example):
      -------------------------------------------------------------------------------
      |class Dog extends Animal {
      |  constructor(name: string, owner: string) {
      |    super(name, owner);
      |    Dog.numOfAnimals++;
      |  }
      |}
      -------------------------------------------------------------------------------
    
      var grover = new Dog("Grover", "Jimmy");
      // static is inherited, next includes number of dogs created, not only other animals (check TypeScript Classes Example before or after this example)
      "# of animals: " + Animal.howManyAnimals(); -------> ${Animal.howManyAnimals()}
      // Instance of fulfills for base class also
      "Is a dog an animal: " + grover instanceof Animal; -> ${grover instanceof Animal}
      // Check if instance grover contains an attribute name, which belongs to parent class
      "Does grover have a name: " + ('name' in grover); --> ${('name' in grover)}
  `);
}
