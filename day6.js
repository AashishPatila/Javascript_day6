
const converter = document.getElementById('converter');
const valueInput = document.getElementById('value');
const inputUnit = document.getElementById('inputUnit');
const outputUnit = document.getElementById('outputUnit');
const result = document.getElementById('result');

converter.addEventListener('submit', e => {
  e.preventDefault();

  const value = valueInput.value;
  const input = inputUnit.value;
  const output = outputUnit.value;

  let resultValue;

  switch (input) {
    case 'km':
      resultValue = value * 1000;
      break;
    case 'm':
      resultValue = value;
      break;
    case 'cm':
      resultValue = value / 100;
      break;
    case 'mm':
      resultValue = value / 1000;
      break;
  }

  switch (output) {
    case 'km':
      resultValue /= 1000;
      break;
    case 'm':
      break;
    case 'cm':
      resultValue *= 100;
      break;
    case 'mm':
      resultValue *= 1000;
      break;
  }

  result.textContent = resultValue;
});
