
export default function () {
	console.log(`

	* Functions

	  // with default values and optional values (use void if there's no return value)
	  var getSum = function(par1: number, par2 = 9, par3?: number): number {
	    if (typeof par3 !== 'undefined') {
	      return par1 + par2 + par3;
	    }

	    return par1 + par2;
	  }
	`);

	  var getSum = function(par1: number, par2 = 9, par3?: number): number {
	    if (typeof par3 !== 'undefined') {
	      return par1 + par2 + par3;
	    }

	    return par1 + par2;
	  }

	console.log(`
	  // Test default param and optional param
	  getSum(3); --> ${getSum(3)}
	  // Test optional param
	  getSum(3, 5); --> ${getSum(3, 5)}
	  // Test sending all params
	  getSum(3, 5, 8); --> ${getSum(3, 5, 8)}
	`);

	console.log(`

	  // with indefinite number of params
	  var getSum2 = function(...pars: number): number {
	    return pars.reduce(() => a + b, 0);
	  }
	`);

	  var getSum2 = function(...pars: number[]): number {
	    return pars.reduce((a, b) => a + b, 0);
	  }

	console.log(`
	  // Test default param and optional param
	  getSum2(3); --> ${getSum2(3)}
	  // Test optional param
	  getSum2(3, 5); --> ${getSum2(3, 5)}
	`);
};
