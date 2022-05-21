const fs = require('fs');
const path = require('path');
fs.mkdir(path.join(__dirname, 'project-dist'),{recursive:true}, () => {});
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
            fs.appendFile(path.join(__dirname, 'project-dist', 'style.css'), datav, (errr) => {
              // console.log('стили скопированы');
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



fs.readFile(path.join(__dirname, 'template.html'), function(err, content) {
  if(err) {
    throw err;
  }else {
    const data = Buffer.from(content);
    const dataToStr = data.toString();
    console.log(dataToStr);
    fs.readdir(path.join(__dirname, 'components'), (err, datahtml) => {
      if(err) throw err;
      datahtml.forEach(elem => {
        let htmlStr = elem.split('.')[0];
        if(dataToStr.indexOf(htmlStr)) {
          console.log('true');
        }
      });
    });
  }
});

// function copyFolder(from, to) {
//   fs.readdir(path.join(__dirname, from), (err, data) => {
//     console.log(data);
//     if (err) {throw err;}
//     data.forEach(elem => {
//       fs.readdir(path.join(__dirname, from, elem), (err, datass) => {
//         if (err) {throw err;}
//         console.log(datass);
//         datass.forEach(elements => {
//           fs.copyFile(path.join(__dirname, from, elem, elements), path.join(__dirname, to, elem), err => {if (err) throw err;});
//         });
//       });
//     });
//   });
// }

// copyFolder('assets', 'project-dist');


/* html import */
fs.readdir(path.join(__dirname, 'components'), (err, datahtml) => {
  if(err) throw err;
  datahtml.forEach(elem => console.log(elem.split('.')[0]));
});