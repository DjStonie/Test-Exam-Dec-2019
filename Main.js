const readline = require('readline');
const PascalTriangle = require('./PascalTriangle');
const selectionSort = require('./selectionSort');

const pascalTriangle = PascalTriangle.PascalTriangle;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function StartPascalTriangle(){
  rl.question('How big do you want us to make the Pascal triangle? (Min = 0, Max = 10)', (answer) => {
    console.log('Thank you, we will generate one with ', answer, ' lines');
    console.log(pascalTriangle(answer));
  }); 
}

function StartSorting(){
  rl.question('\nWhat do you want us to sort?\n\nYou can enter integer 0-9 and the english alphabet a-z & A-Z\n\nLetters will be converted to unicode decimals. \n\nSeparate the signs with a comma \n e.g. a,1,b,6,d \n\n', (answer) => {
    console.log(`Here it is sorted`);
    console.log(selectionSort(answer));
  }); 
}

//This should send you to the right method and will be the first input from the user
rl.question('Do you wanna call 1 (pascal) or 2 (sorting)? ', (answer) => {
  console.log('Thank you, we will go to ', answer);

  if (answer === 'pascal' || answer === '1'){
    StartPascalTriangle();
  }else if (answer === 'sorting' || answer === '2'){
    StartSorting();
  }
}); 