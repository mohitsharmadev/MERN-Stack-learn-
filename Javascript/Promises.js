//Promises object can be
//Pending While a Promise object is "pending" (working), the result is undefined.
//fulfilled When a Promise object is "fulfilled", the result is a value.
//rejected  When a Promise object is "rejected", the result is an error object.
let prom = new Promise((resolve, reject) => {
  resolve(56);
  console.log("promises");
});
console.log("first");
setTimeout(() => {
  console.log("timeout");
  console.log(Promise);
}, 2000);
