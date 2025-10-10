import fs from 'fs/promises';

const fileContent = await fs.readFile('../data/employees.json', 'utf-8');
console.log(fileContent)