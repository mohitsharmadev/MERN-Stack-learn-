let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(25);
  }, 2000);
});
//attaching multiple handlers in promise
p1.then(() => {
  console.log("first then");
});
p1.then((value) => {
  console.log(value);
});
