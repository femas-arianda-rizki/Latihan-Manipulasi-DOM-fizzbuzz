const fizzBuzz = (total) => {
  let output = "";
  for (let i = 1; i <= total; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      output += "fizzbuzz!<br>";
    } else if (i % 3 === 0) {
      output += "fizz!<br>";
    } else if (i % 5 === 0) {
      output += "buzz!<br>";
    } else {
      output += i + "<br>";
    }
  }
  return output;
};

const getAFizzBuzz = () => {
  const input = document.getElementById("inputNumber").value;
  const resultElement = document.getElementById("result");
  const inputNumber = parseInt(input);

  if (isNaN(inputNumber) || inputNumber < 1) {
    resultElement.innerHTML = "Invalid input!";
  } else {
    const result = fizzBuzz(inputNumber);
    resultElement.innerHTML = result;
  }
};
