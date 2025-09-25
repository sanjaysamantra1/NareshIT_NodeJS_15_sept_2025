function add(a, b, c = 0) {
    console.log(a + b + c);
}
add(10, 20);
add(10, 20, 30);

function logMessage(message, level = 'info') {
    console.log(`[${level.toUpperCase()}] ${message}`);
}
logMessage('Server Started');
logMessage('User Not Found', 'warn');
logMessage('DB Crashed!', 'error');