
let randVals = {x: 1, y: 2, z: 3};
let {x, y, z} = randVals;
let swapedArr = [z, y, x];

export default function show() {
    console.log(`
        * Destructuring
          var randValObj = {x:1, y: 2, z: 3};
          var {x, y, z} = randValsObj;         ---> x=${x} y=${y} z=${z}
          
          // swap values in arrays:
          let swapedArr = [z, y, x];           ---> ${swapedArr.toString()}
          [x, y, z] = [z, y, x];               ---> ${[x, y, z] = [z, y, x]}
                                               ---> x=${x} y=${y} z=${z}
    `);
}
