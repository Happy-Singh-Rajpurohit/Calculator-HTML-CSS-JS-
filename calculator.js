let display = document.getElementById('resultTab');

function appendValue(value){
    display.value += value;
}

function clearDisplay(){
    display.value = "";
}

function calculate() {
    try {
      display.value = eval(display.value);
    } catch {
      display.value = 'Error';
    }
  }