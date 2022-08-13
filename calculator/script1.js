var output = 0;
function AC(){
  document.getElementById('out').value = 0;
  document.getElementById('input1').value = 0;
  document.getElementById('input2').value = 0;
  output = 0;
}
function posNeg(){
  let x = Number(document.getElementById('out').value);
  x = -1 * x;
  document.getElementById('out').value = x;
  output = x;
}
function remainder(){
  if (output == 0) {
    let x = Number(document.getElementById('input1').value);
    let y = Number(document.getElementById('input2').value);
    output = x % y;
  }
  else{
    let x = Number(document.getElementById('input1').value);
    output %= x;
  }
  document.getElementById('out').value = output;
}
function division(){
  if (output == 0) {
    let x = Number(document.getElementById('input1').value);
    let y = Number(document.getElementById('input2').value);
    output = x / y;
  }
  else{
    let x = Number(document.getElementById('input1').value);
    output /= x;
  }
  document.getElementById('out').value = output;
}
function multiply(){
  if (output == 0) {
    let x = Number(document.getElementById('input1').value);
    let y = Number(document.getElementById('input2').value);
    output = x * y;
  }
  else{
    let x = Number(document.getElementById('input1').value);
    output *= x;
  }
  document.getElementById('out').value = output;
}
function subtraction(){
  if (output == 0) {
    let x = Number(document.getElementById('input1').value);
    let y = Number(document.getElementById('input2').value);
    output = x - y;
  }
  else{
    let x = Number(document.getElementById('input1').value);
    output -= x;
  }
  document.getElementById('out').value = output;
}
function addition(){
  if (output == 0) {
    let x = Number(document.getElementById('input1').value);
    let y = Number(document.getElementById('input2').value);
    output = x + y;
  }
  else{
    let x = Number(document.getElementById('input1').value);
    output += x;
  }
  document.getElementById('out').value = output;
}
