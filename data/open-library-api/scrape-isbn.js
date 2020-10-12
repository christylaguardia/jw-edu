/**
 * Manually call the open library api with a list of isbn numbers
 * Run using `node data/open-library-api/scrape-isbn.js`
 *
 * See https://openlibrary.org/dev/docs/api/books
 */

var superagent = require("superagent");
var fs = require("fs");
// var isbnList = require("./source/isbn-13.json");
// var type = "ISBN_13";
var isbnList = require("./source/isbn-10.json");
var type = "ISBN_10";

var apiResults = [];

for (let index = 0; index < isbnList.length; index++) {
  const isbn = isbnList[index];

  superagent
    .get("https://openlibrary.org/api/books?bibkeys=ISBN:" + isbn + "&format=json&jscmd=details")
    .set("accept", "json")
    .end((err, res) => {
      const parsedResult = JSON.parse(res.text);
      const data = parsedResult["ISBN:" + isbn];
      apiResults.push({
        type: type,
        identifier: isbn,
        data: data || {},
      });

      if (index === isbnList.length - 1) {
        fs.writeFile("data/import/open-library-api_" + type + ".json", JSON.stringify(apiResults), err => {
          if (err) throw err;
          console.log("created import json");
        });
      }
    });
}
