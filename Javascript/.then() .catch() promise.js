//resolve(value) if the job is successfully
let p1 = new Promise((resolve, reject) => {
  console.log("promise is pending");
  setTimeout(() => {
    console.log("I am promise and Iam fulfilled ");
    resolve(true);
  }, 2000);
});
//reject(error) if the job fails
let p2 = new Promise((resolve, reject) => {
  console.log("promise is pending");
  setTimeout(() => {
    console.log("I am promise and I am rejected");
    reject(new Error("I am Error"));
  }, 2000);
});
//to get the value
p1.then((value) => {
  console.log(value);
});
//to get  the error
//catch to handle an error
p2.catch((error) => {
  console.log("some error occurred in p2");
});
//print value and handle the error
p2.then(
  (value) => {
    console.log(value);
  },
  (error) => {
    console.log(error);
  }
);
console.log(p1, p2);
