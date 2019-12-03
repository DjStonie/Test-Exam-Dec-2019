const readline = require('readline');
const PascalTriangle = require('./PascalTriangle');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('How big do you want us to make the Pascal triangle? ', (answer) => {
  // TODO: Log the answer in a database
  console.log(`Thank you, we will generate one with ${answer} lines`);
  console.log(PascalTriangle(`${answer}`));
  rl.close();
}); 