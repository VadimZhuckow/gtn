let name = "";
let guesses = 0;
let number = Math.floor(Math.random() * 100);

const output = document.querySelector("#output");
const prompt = document.querySelector("#prompt");
const input = document.querySelector("#prompt input");

input.focus();
prompt.addEventListener("submit", submitForm);

showMessage("Enter name");
function submitForm(event) {
  event.preventDefault();
  proccesInput(input.value);
  input.value = "";
}

function clear() {
  for (i = 0; i < output.children.length; i++) {
    output.removeChild(output.children[i]);
  }
}
function showMessage(message) {
  let li = document.createElement("li");
  li.textContent = message;
  output.appendChild(li);
}
function proccesInput(input) {
  if (!input) return;
  if (!name) {
    name = input;  
    showMessage(`Привет  ${name}  введи число от 1 до 99`);
    return;
  }
  let guess = Number.parseInt(input);
  if (Number.isNaN(guess)) return;
  guesses += 1;
  if (guess > number) {
    showMessage("много");
  } else if (guess < number) {
    showMessage("мало");
  }else{
    showMessage(`Красава ${name}`)
    showMessage(`Число ${number}`)
    showMessage(`Количество попыток:${guesses}`)
    prompt.remove();
  }
}
