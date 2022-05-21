const fs = require('fs');
const readline = require('readline');
const { stdin: input, stdout: output } = require('process');

const rl = readline.createInterface({ input, output });

rl.question('What do you think of Node.js?\n ', (cont) => {

  rl.on('line', () => {
    fs.appendFile('test.txt', cont, (errr) => {
      if(errr) {
        throw errr;
      }
    });
  });
 

  rl.on('SIGINT', () =>{
    console.log('\nGood bye! Nice to see you!');
    rl.close();
  });
});

