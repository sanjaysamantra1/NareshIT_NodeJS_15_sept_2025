class Student {
    firstName = 'Virat';
    lastName = 'Kohli';

    fullName1() {
        console.log(this.firstName, this.lastName); // this = Student
    }
    fullName2 = () => {
        console.log(this.firstName, this.lastName); // this = Student
    }
}
let std1 = new Student();
std1.fullName1();
std1.fullName2();


