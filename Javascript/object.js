const student = {
  firstName: "Mohit",
  lastName: "Sharma",
  stream: "bca",
  sport: "badminton",
  //this is a keyword refer as an object
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
//access object properties
console.log(student.stream);
console.log(student.fullName());
