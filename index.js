'use strict';

const fileReader = require('./lib/reader.js');
const PromiseFileReader = require('./lib/reader-promises.js');

// Obtain and assert input
console.log(process.argv);
let files = process.argv.slice(2);
console.log(files);


if( ! (files instanceof Array && files.length) ) {
  throw new Error('Invalid Args');
}

// fileReader(files, (err,data) => {
//   if ( err ) { throw err; }
//   console.log('From Callback:', data);
// });

PromiseFileReader(files)
  .then(content => console.log('From Promises:', content));
