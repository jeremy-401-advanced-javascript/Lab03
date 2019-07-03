'use strict';

jest.mock('fs');

const reader = require('../../lib/reader-promises');



describe('File Reader Module', () => {

  it('when given a bad file, returns an error', () => {
    let files = ['bad.txt'];
    // In jest, throwing errors obviously kills the app, so if you're
    // going to throw one in a test, have the expect execute your code as a
    // function so that you can trap it.
    return reader(files)
      .then(passing => {
        console.log('Passing 😀');
      })
      .catch(err => {
        expect(err).toBeDefined();
      });
  });
});


it('reads 3 files', () => {
  let files = ['file1.txt', 'file2.txt', 'file2.txt'];
  
  return reader(files)
    .then( data => {
      expect(data instanceof Array ).toBeTruthy();
      expect(data.length ).toBe(3);
    }).
    catch(err => {
      expect(err).toBeUndefined();
    });
});



