const fs = require('fs');
const { copyFile } = require('fs/promises');
const path = require('path');

function copyFolder(from, to) {
  fs.mkdir(path.join(__dirname, to),{recursive:true}, () => {});
  fs.readdir(path.join(__dirname, from), (err, data) => {
    if (err) {throw err;}
    data.forEach(elem => {
      fs.copyFile(path.join(__dirname, from, elem), path.join(__dirname, to, elem), err => {if (err) throw err;});
    });
  });
}
copyFolder('files', 'files-copy');