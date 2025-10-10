import fs from 'fs/promises';

const file_stat = await fs.stat('../data/employees.json');
console.log(file_stat)