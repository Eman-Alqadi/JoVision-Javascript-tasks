document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("myButton");

  button.addEventListener("click", function () {
    let numbers = [];
    for (let i = 0; i <= 100; i++) {
      numbers.push(i);
    }

    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }

    document.getElementById("result").textContent = "Sum is: " + sum;
  });
});
