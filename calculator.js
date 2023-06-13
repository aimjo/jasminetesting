window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const values = {amount: 10000, years: 10, rate: 4.5};
  const amount1 = document.getElementById("loan-amount");
  amount1.value = values.amount;
  const years1 = document.getElementById("loan-years");
  years1.value = values.years;
  const rate1 = document.getElementById("loan-rate");
  rate1.value = values.rate;
  update();

}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const currentUIValues = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(currentUIValues));
  
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const principal = values.amount;
  const monthlyRate = (values.rate / 100) / 12;
  const totalMonths = values.years * 12;
  const x = Math.pow(1 + monthlyRate, totalMonths);
  const monthlyPay = (principal * x * monthlyRate) / (x - 1);
  const payment = monthlyPay.toFixed(2);
  return payment;
  
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  //select span id of monthly-payment
  //write calculateMonthlyPayments into the span
  const monthlyPayment = document.getElementById("monthly-payment");
  monthlyPayment.innerText = "$" + monthly;
  
}

