var formEl = document.querySelector(".form");
var inputNum = document.querySelector(".input_number");
var outNum = document.querySelector(".output_number");
formEl.addEventListener("submit", function (evt) {
  evt.preventDefault();
  var inputValue = inputNum.value;
  var newStr = "";
  if (inputValue % 3 == 0) {
    newStr += "Fizz😊";
  }
  if (inputValue % 5 == 0) {
    newStr += "Buzz😎";
  }
  outNum.textContent = newStr || `Nothing`;
});
