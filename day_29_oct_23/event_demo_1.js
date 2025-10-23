// const fs = require('fs');
const events = require('events');
const eventEmitter = new events.EventEmitter();
eventEmitter.setMaxListeners()

eventEmitter.on('customEvent', function () { // listen
    console.log('A custom event is triggered...')
})
eventEmitter.on('customEvent', function () { // listen
    console.log('A custom event is triggered...')
})
eventEmitter.on('customEvent', function () { // listen
    console.log('A custom event is triggered...')
})
eventEmitter.emit('customEvent'); // trigger

eventEmitter.on('customEventWithParam', function (name, add) { // listen
    console.log(`A custom event triggered with param, name ${name} , add is ${add}`)
})
eventEmitter.emit('customEventWithParam', 'Ravikiran', 'Bangalore'); // trigger
eventEmitter.emit('customEventWithParam', 'Nitin', 'Indore'); // trigger.

console.log(eventEmitter.listenerCount('customEvent'))
