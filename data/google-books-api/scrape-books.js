/**
 * Manually call the books api with a list of resource ids
 * Run using `node data/google-books-api/scrape-books.js`
 *
 * "Quota exceeded" error will happen with too many requests per minute
 * See https://developers.google.com/books/docs/overview
 */

var superagent = require('superagent');
var fs = require('fs');
var googleResourceIds = require('./resourceIds.json');

for (let index = 0; index < googleResourceIds.length; index++) {
  superagent
    .get('https://www.googleapis.com/books/v1/volumes/' + googleResourceIds[index])
    .set('accept', 'json')
    .end((err, res) => {
      fs.writeFile('files/' + googleResourceIds[index] + '.json', res.text, (err) => {
        if (err) throw err;
        console.log('created ' + googleResourceIds[index] + '.json');
      });
    });
}
