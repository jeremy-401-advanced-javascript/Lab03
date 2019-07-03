'use strict';

const fs = require('fs');
const util = require('util');
const readFile = util.promisify(fs.readFile);


/**
 * Our module exports a single function that expects an array of files
 * @type {function(*=)}
 */
module.exports = exports = (files) => {
  return readAll([...files]);
};

/**
 * This wraps the fs module, primarily so that we can more easily write tests around it.
 * @param files
 * @param callback
 */
const readOne = (files) => {
  return readFile(files);
};

/**
 * Reads and returns the contents of 3 files
 * Requires 3 paths, otherwise, it'll fail with aggression
 * @param paths
 */
const readAll = (paths) => {

  let content = [];

  return readOne(paths[0])
    .then(data => {
      content.push(data.toString().trim());
      return readOne(paths[1]);
    })
    .then(data => {
      content.push(data.toString().trim());
      return readOne(paths[2]);
    })
    .then( data => {
      console.log(data);
      content.push(data.toString().trim());
      return content;
    })
    .catch(err => { throw err; });
  
};

