const TicketManager = require('./ticketManager');
const EmailService = require('./emailService');

const ticketManager = new TicketManager(2);
const emailService = new EmailService();

ticketManager.on('buyTicket', (person, price, time) => {
    console.log(`${person} bought a ticket for Rs. ${price} at ${time}`);
    emailService.sendEmail(person, 'Congratulation, Your ticket is booked');
})
ticketManager.on('noTicketAvailable', (person, error) => {
    console.log(`${error}`);
    emailService.sendEmail(person, 'Sorry, No tickets available');
})

ticketManager.buy('ravi@gmail.com', 200);
ticketManager.buy('rahman@gmail.com', 300);
ticketManager.buy('Nitin@gmail.com', 400);