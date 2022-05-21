const fs = require('fs');
const path = require('path');
fs.readFile(path.join(__dirname, 'text.txt'), function(err, content) {
  if(err) {
    throw err;
  }else {
    const data = Buffer.from(content);
    console.log(data.toString());
  }
});