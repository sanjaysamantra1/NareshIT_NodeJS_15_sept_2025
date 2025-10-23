const { EventEmitter } = require('events');

class TicketManager extends EventEmitter {
    constructor(ticketCount) {
        super();
        this.ticketCount = ticketCount;
    }
    buy(email, price) {
        if (this.ticketCount > 0) {
            this.ticketCount--;
            this.emit('buyTicket', email, price, new Date().toLocaleTimeString())
        } else {
            this.emit('noTicketAvailable', email, new Error('There are no more tickets to book'))
        }
    }
}
module.exports = TicketManager;