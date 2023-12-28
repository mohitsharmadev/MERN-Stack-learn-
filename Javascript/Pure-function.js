//pure function
function pure(num1, num2) {
  return num1 + num2;
}
console.log(pure(2, 5));

//this is not pure function
let b = 10;
function impure(num1, num2) {
  return num1 + num2 + b;
}
console.log(impure(6, 9));
