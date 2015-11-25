function Complex (x, y) {
	this.re = x;
	this.im = y;
};

Math.complex = Complex;

//addition function
Complex.prototype.sum = function(x, y) {
	var r = x.re + y.re;
	var i = x.im + y.im;

	var result =  new Complex(r, i);
	return result;
}
//subtraction function
Complex.prototype.difference = function(x, y) {
	var r = x.re - y.re;
	var i = x.im - y.im;

	var result =  new Complex(r, i);
	return result;

	
}
//multiplication function
Complex.prototype.multiply = function(x, y) {

	var r = (x.re * y.re) + (x.im * y.im);
	var i = (x.re * y.im) + (x.im * y.re);

	var res = new Complex(r, i);

	return res;
	
}
//division function
Complex.prototype.division = function(x, y) {

	var z = {re: y.re, im: -(y.im)};

	if (z !== 0){
		var a = y.multiply(x,z);
		var b = y.multiply(y,z);

		var r = (a.re) / (b.re);
		var i = (a.im) / (b.re);

		var res = new Complex(r, i);

		return res;

	} else {
		console.log("Cannot be divided by 0!");
	}
	
}