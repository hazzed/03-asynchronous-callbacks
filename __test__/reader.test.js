'use strict';

const textReader = require('../lib/reader');
const paths = [`${__dirname}/../assets/demo1.txt`, `${__dirname}/../assets/demo2.txt`,`${__dirname}/../assets/demo3.txt`];
const badPaths = [``,``,``];


describe('reader.test.js', () => {
    
  describe('testing to see if file text reads right', () => {
    
    test('return the file text if there are no errors',
      (run) => {
        textReader.readText(paths, (error, data) => {
          expect(error).toBeNull();
          expect(data).toEqual([`Yo demo one here`, `yo demo 2 here`, `yo demo 3 here`]);
          run();
        });
      });
  });
    
  describe('testing to see that incorrect file paths throw an error', () => {
          
    test('throw an error if invalid file path', () => {
      textReader.readText(badPaths, (error) => {
        expect(error).not.toBeNull();
      });
    });
  });
});