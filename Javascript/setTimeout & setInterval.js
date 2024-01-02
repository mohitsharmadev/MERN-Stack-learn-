//set Timeout() method calls function after number of millisecond
//setTimeout(function,millisecond,parm1,param2,..)
console.log("first");
const myTimeout = setTimeout(function () {
  console.log("timeout console");
}, 3000);
const add = (a, b) => {
  console.log("sum of", a + b);
  a + b;
};
setTimeout(add, 8000, 6, 9);
//clear Timeout
clearTimeout(myTimeout);

//setInterval
//setInterval() method continues calling the function until clearInterval() is called, or the window is closed.
//setInterval(function,milliseconds, param1,param2)

let myInterval = setInterval(function () {
  console.log("set Interval");
}, 2000);
clearInterval(myInterval);
