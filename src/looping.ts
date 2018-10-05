
let strArr : String[] = ["A", "B", "C"];

export default () => {
  console.log(`
    * Looping shortcut in TypeScript

      Having an array of string values:
      --------------------------------------------------------------------------
      | let strArr : String[] = ["A", "B", "C"];
      --------------------------------------------------------------------------

      // Vanilla JS'  for-in: for(var index       in arr)
      for(let index in strArr) {
        console.log("index=" + index);
      }
  `);
      
      for(let index in strArr) {
        console.log("      index=" + index);
      }

  console.log(`

      // TypeScript's for-of: for(var actualValue of arr)
      for(let value of strArr) {
        console.log("value=" + value);
      }
  `);

      for(let value of strArr) {
        console.log("      value=" + value);
      }  
}
