// function increaseValue() {
//   var value = parseInt(document.getElementById('number').value, 10);
//   value = isNaN(value) ? 0 : value;
//   value++;
//   document.getElementById('number').value = value;
// }

// function decreaseValue() {
//   var value = parseInt(document.getElementById('number').value, 10);
//   value = isNaN(value) ? 0 : value;
//   value < 1 ? value = 1 : '';
//   value--;
//   document.getElementById('number').value = value;
// }

function increaseValue(id) {
  var value = parseInt(document.getElementById(id).value);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById(id).value = value;
}

function decreaseValue(id) {
  var value = parseInt(document.getElementById(id).value);
  value = isNaN(value) ? 0 : value;
  value--;
  document.getElementById(id).value = value < 1 ? 1 : value;
}