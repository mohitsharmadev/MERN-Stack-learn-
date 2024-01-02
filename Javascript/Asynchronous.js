// asynchronous code, multiple tasks can execute at the same time while tasks in the background finish.
// This is what we call non-blocking code
let fName = "Name";
let lName = "Last";
console.log(fName);
setTimeout(function () {
  console.log("Asynchronous");
}, 3000);
console.log(lName);
