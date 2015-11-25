describe("Complex-Number", function () {

    it("it should return an object with real and imaginary number as the properties", function () {
    expect(Math.complex(2, 3)).toEqual({re: 2, im: 3});
  });


  it("should find addition of two complex numbers ", function() {
    var ans = new Complex(8, 9).sum(2, 1);
    expect(ans).toEqual({re: 10, im: 10});
  });

  it("should find difference of two complex numbers ", function() {
    var answ = new Complex(8, 9).difference(2, 1);
    expect(answ).toEqual({re: 6, im: 8});
  });

  it("should find product of two complex numbers ", function() {
    var answ = new Complex(8, 9).multiply(2, 1);
    expect(answ).toEqual({re: 7, im: 26});
  });  

  it("should perform division of two complex numbers ", function() {
    var answ = new Complex(4, 2).division(3, -1);
    expect(answ).toEqual(1, 1);
  }); 