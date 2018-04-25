// function StudentReport() {
//     var grade1 = 4;
//     var grade2 = 2;
//     var grade3 = 1;
//     this.getGPA = function() {
//         return (grade1 + grade2 + grade3) / 3;
//     };
// }
//
// var myStudentReport = new StudentReport();
//
// for(var x in myStudentReport) {
//     if(typeof myStudentReport[x] !== "function") {
//         console.log("Muahaha! " + myStudentReport[x]);
//     }
// }
//
// console.log("Your overall GPA is " + myStudentReport.getGPA());
//
// var stu2 = new StudentReport();
//
// stu2.grade4 = 1;
//
// console.log(stu2);

class User{
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  static countUsers() {
    console.log('There are 50 users');
  }

  registered() {
    console.log(this.username + ' has password of ' + this.password);
  }
}

User.countUsers();
let user1 = new User('Adam', '12345');
console.log(user1.registered());

class Group extends User {
  constructor(username, password, firstName) {
    super(username, password);
    this.firstName = firstName;
  }
  getGroup() {
    console.log(this.username + ' added firstname of ' + this.firstName);
  }
}

const user2 = new Group('Peter', 322342, 'Peter Slovaky');

console.log(user2);
