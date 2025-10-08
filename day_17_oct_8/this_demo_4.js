let user = {
    firstName: 'Virat',
    lastName: 'Kohli',
    fullName1: function () {
        console.log(this.firstName, this.lastName); // this = user
    },
    fullName2: () => {
        console.log(this.firstName, this.lastName); // this = {}
    }
}
user.fullName1();
user.fullName2();

