
export class GenericNumber<T> {
	add: (val1: T, val2: T) => T;
};

var aNumber = new GenericNumber<number>();
aNumber.add = function(x, y){ return x + y; };

var aStringNum = new GenericNumber<string>();
aStringNum.add = function(x, y){ return String(Number(x) + Number(y)); };

export default function show() {
  console.log(`
    * Generic Classes

      Having next generic parameterized definition of a class:
      -------------------------------------------------------------------------------
      |class GenericNumber<T> {
      |  add: (val1: T, val2: T) => T;
      |}
      -------------------------------------------------------------------------------

      We can use it with next specific data types: 

      var aNumber = GenericNumber<number>();
      aNumber.add = function(x, y){ return x + y; };
      console.log("5 + 4: " + aNumber.add(5, 4)); ---> ${aNumber.add(5, 4)}

      var aStringNum = GenericNumber<string>();
      aStringNum.add = function(x, y){ return String(Number(x) + Number(y)); };
      console.log("5 + 4: " + aStringNum.add("5", "4")); ---> ${aStringNum.add("5", "4")}
  `);
}
