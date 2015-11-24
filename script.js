Complex = function (x, y) {

    return {
        re: x,
        im: y
    }
};

Math.complex = Complex;


//addition function
Complex.prototype.sum = function(x, y) {
	var r = x.re + y.re;
	var i = x.i + y.i;

	return {
		re: r,
		im: i
	}
	
}
//subtraction function
Complex.prototype.difference = function(x, y) {
	var r = x.re - y.re;
	var i = x.i - y.i;

	return {
		re: r,
		im: i
	}
	
}
//multiplication function
Complex.prototype.product = function(x, y) {

	var r = (x.r * y.r) + (x.i * y.i);
	var i = (x.r * y.i) + (x.i * y.r);

	return {
		re: r,
		im: i
	}
	
}
//division function
Complex.prototype.division = function(x, y) {

	var z = {re: y.r, im: -(y.i)};

	if (z!==0){
		var a = product(x,z);
		var b = product(y,z);

		var r = (a.re) / (b.re);
		var i = (a.im) / (b.re);

		return {
			re: r,
			im: i

		}

	} else {
		console.log("Cannot be divided by 0!");
	}
	
}

console.log(Math.complex(2, 3));