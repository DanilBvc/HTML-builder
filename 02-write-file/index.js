const fs = require('fs');
const path = require('path');
const { stdin, stdout } = process;


const stream = fs.createWriteStream(path.join(__dirname, 'test.txt'), {flags:'w'});
stdout.write('Hello write here smthn\n');
stdin.on('data', data => {
  
  if(data.toString().trim() === 'exit') {
    stdout.write('\nGood bye! Nice to see you!');
    process.exit();
  }else {
    stream.write(data);
  }
});

process.on('SIGINT', () =>{
  stdout.write('\nGood bye! Nice to see you!');
  process.exit();
});
