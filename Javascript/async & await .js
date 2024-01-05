//async makes a function return a promise
//await makes a function wait for promise
function promises() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("resolved");
    }, 2000);
  });
}

async function add() {
  console.log("first");
  const result = await promises();
  console.log(result);
}
add();
