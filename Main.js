const readline = require('readline');
const PascalTriangle = require('./PascalTriangle');
const selectionSort = require('./selectionSort');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



function StartPascalTriangle(){
  rl.question('How big do you want us to make the Pascal triangle? ', (answer) => {
    console.log(`Thank you, we will generate one with ${answer} lines`);
    console.log(PascalTriangle(`${answer}`));
  }); 
}

function StartSorting(){
  rl.question('What do you want us to sort?\n You can enter integer 0-9 and the english alphabet a-zA-Z\nLetters will be converted to unicode decimals \n separate the signs with a comma \n e.g. a,1,b,6,d ', (answer) => {
    console.log(`Here it is sorted`);
    console.log(selectionSort(`${answer}`));
  }); 
}

//This should send you to the right method and will be the first input from the user
rl.question('Do you wanna call pascal or sorting? ', (answer) => {
  console.log(`Thank you, we will go to ${answer}`);

  if (`${answer}`==`pascal`){
    StartPascalTriangle();
  }else if (`${answer}`==`sorting`){
    StartSorting();
  }
}); 