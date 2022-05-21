const fs = require('fs');
const path = require('path');
fs.writeFile(path.join(__dirname, 'project-dist', 'bundle.css'), '', {recursive:true}, () => {});
fs.readdir(path.join(__dirname, 'styles'), (err, data) => {
  if(err) throw err;
  data.forEach(elem => {
    fs.stat(path.join(__dirname, 'styles', elem), (err, stat) => {
      if (err) throw err;
      // eslint-disable-next-line no-empty
      if(stat.isFile() && elem.split('.')[1] === 'css') {
        fs.readFile(path.join(__dirname, 'styles', elem), function(err, content) {
          if(err) {
            throw err;
          }else {
            const datav = Buffer.from(content);
            fs.appendFile(path.join(__dirname, 'project-dist', 'bundle.css'), datav, (errr) => {
              if(errr) {
                throw errr;
              }
            });
          }
        });
      }
    });
  });
});