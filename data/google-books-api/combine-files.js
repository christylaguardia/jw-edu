/**
 * A node script to combine the scraped files into one
 *
 * `node data/google-books-api/combine-files.js`
 */

const path = require('path');
const fs = require('fs');

const combinedFiles = {};
const directoryPath = path.join(__dirname, '/files');

// Get all file names
fs.readdir(directoryPath, function (err, files) {
  if (err) {
    return console.log('Unable to scan directory: ' + err);
  }

  // Read each file and add to obj
  files.forEach(function (file) {
    const filePath = path.join(__dirname, '/files', file);
    const fileData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    combinedFiles[fileData.id] = fileData;
  });

  // Write obj to file
  const data = JSON.stringify({ 'book-details': combinedFiles });
  fs.writeFile('data/import/book-details.json', data, (err) => {
    if (err) throw err;
    console.log('combined json files!');
  });
});

