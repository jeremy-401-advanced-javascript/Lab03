const fs = require('fs');
const faker = require('faker');

let files = process.argv.slice(2);
console.log(process.argv);

fs.writeFile(files.toString(), faker.internet.email(), (err) => {
  if(err) { 
    throw err; 
  } else {
    console.log('Save');
  }
});

