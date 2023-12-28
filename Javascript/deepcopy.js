let employee = {
  eName: "Morgan",
  eId: 258,
  eAddress: "New York",
  eSalary: 9000,
};
//deep copy link nested object means non-primitive data types
//employee and newEmployee are different reference memory
//newEmployee has create new reference memory
let newEmployee = JSON.parse(JSON.stringify(employee));
newEmployee.eId = 963;
newEmployee.eName = "Lee";
console.log(newEmployee);
console.log(employee);
