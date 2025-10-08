let str = 'Bangalore@1234';

// Encrypt
let encryptedPassword = btoa(str);
console.log(encryptedPassword);

// Decrypt
let rawPassword = atob(encryptedPassword);
console.log(rawPassword);