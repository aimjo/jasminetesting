
it('should calculate the monthly rate correctly', function () {
  const values = {amount: 20000, years: 20, rate: 4.3};
  expect(calculateMonthlyPayment(values)).toEqual("124.38")
});


it("should return a result with 2 decimal places", function() {
  const values = {amount: 20031, years: 22, rate: 4.8};
  expect(calculateMonthlyPayment(values)).toEqual("123.00")
});

/// etc
