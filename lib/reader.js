'use strict';

const textReader = module.exports = {};
const fs = require('fs');

const textArray = [];

textReader.readText = (paths, callback) => {
  fs.readFile(paths[0], (error, data) => {
    if(error) callback(error);
    textArray.push(data.toString());
    fs.readFile(paths[1], (error, data) => {
      if(error) callback(error);
      textArray.push(data.toString());
      fs.readFile(paths[2], (error, data) => {
        if(error) callback(error);
        textArray.push(data.toString());
        callback(null, textArray);
      });
    });
  });
};