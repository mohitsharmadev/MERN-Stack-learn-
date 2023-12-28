let employee = {
  eName: "jack",
  eId: 56,
  eAddress: "Singapore",
  eSalary: 900000,
};
//shallow copy link flat object means primitive data types
//he takes same memory allocation
//newEmployee and employee are same reference memory allocation
let newEmployee = employee;
console.log(employee);
console.log(newEmployee);
//Modified object
newEmployee.eName = "albert";
newEmployee.eSalary = 800000;
console.log(employee);
console.log(newEmployee);
