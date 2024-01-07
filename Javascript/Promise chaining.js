//promise chaining
//promise chaining means return promise in then
let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("resolved in 2 seconds");
    resolve(56);
  }, 2000);
});
p1.then((value) => {
  console.log(value);
  let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("I am Error"));
      //   resolve("promise second");
    }, 2000);
  });
  return p2;
})
  .then(
    (value) => {
      console.log(value);
      console.log("we are done");
    },
    (error) => {
      console.log(error);
      //return 2 also declared a promise
      return 2;
    }
  )
  .then((value) => {
    console.log(value);
  });
