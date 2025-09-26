function add(a, b) {
    console.log(a + b)
}
add(10, 20); // normal function

// ES_5
function Student(roll, name, course) { // constructor
    this.roll = roll;
    this.name = name;
    this.course = course;
}
let std1 = new Student(101, 'subasish', 'NodeJS');
console.log(std1);

// ES_6
class Trainer {
    constructor(name, course, time) {
        this.name = name;
        this.course = course;
        this.time = time;
    }
}
let trainer1 = new Trainer('sanjay', 'NodeJs', '7.30 AM');
console.log(trainer1)