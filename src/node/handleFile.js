const fs = require('fs');
const { log } = require('./log.js');
const CONST = require('./constants.js');

const readData = (filePath = CONST.defaultPath) => {
  return JSON.parse(fs.readFileSync(filePath, CONST.fileEncoding));
};

const writeData = (filePath = contactsPath, fileContents = '') => {
  return fs.writeFileSync(filePath, JSON.stringify(fileContents), CONST.fileEncoding);
};

module.exports = { readData, writeData };
