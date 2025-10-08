console.log(module.exports); // {}
console.log(this); // this = module.exports = {}
console.log(globalThis); // this =  global

module.exports.name = "sanjay";
module.exports.add = "bangalore";

console.log(this);  // { name: 'sanjay', add: 'bangalore' }