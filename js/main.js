var formEl = document.querySelector(".form");
var inputNum = document.querySelector(".input_number");
var outNum = document.querySelector(".output_number");

formEl.addEventListener("submit", function (evt) {
  evt.preventDefault();
  var inputValue = inputNum.value;
  if (inputValue % 3 == 0 && inputValue % 5 == 0)
    outNum.textContent = "FizzBuzz😊";
  else if (inputValue % 3 == 0) outNum.textContent = "Fizz🙂";
  else if (inputValue % 5 == 0) outNum.textContent = "Buzz🤩";
  else outNum.textContent = "😒Nothing";
});
