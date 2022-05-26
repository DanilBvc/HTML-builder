const fs = require('fs');
const { copyFile } = require('fs/promises');
const path = require('path');
fs.rm(path.join(__dirname, 'files-copy'), { recursive: true }, () => {});
function copyFolder(from, to) {
  fs.readdir(path.join(__dirname, from), (err, data) => {
    fs.mkdir(path.join(__dirname, to),{recursive:true}, () => {});
    if (err) {throw err;}
    data.forEach(elem => {
      fs.copyFile(path.join(__dirname, from, elem), path.join(__dirname, to, elem), err => {if (err) throw err;});
    });
  });
}
setTimeout(() => {copyFolder('files', 'files-copy');}, 1000);