
function theSum(x?: number, y?: number, z?: number): number {
    console.log(`            Parameters received by theSum:     x=${x} y=${y} z=${z}`);
    return x + y + z;
}

var args = [4, 5, 6];

export default function show() {
    console.log(`
        * Spread operator

            Having next definition of a function that receives 3 optional parameters
            (it's important them to be optional or an "Expected N arguments, but got 0
            or more" error message will be thrown during compile time):
            -------------------------------------------------------------------------------
            |function theSum(x?: number, y?: number, z?: number): void {
            |  console.log('x=' + x + 'y=' + y + 'z=' + z);
            |  return x + y + z;
            |}
            -------------------------------------------------------------------------------

            Then args can be individually sent by spreading an aray's elements:

            var args: number[] = [4, 5, 6];
            theSum(...args);                             ---> ${theSum(...args)}
    `);
}
