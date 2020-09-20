/**
 * WIP
 */

var contentful = require('contentful-management');
var data = require('./books.json');
var config = require('../config');
var client = contentful.createClient({ accessToken: config.CONTENTFUL_ACCESS_TOKEN });

for (var i = 0; i < 3; i + 1) {
    var book = data[i];
    client.getSpace(config.CONTENTFUL_SPACE_ID)
        .then((space) => space.createEntry('Book', {
            fields: {
                title: {
                    'en-US': book["Title"]
                },
                contributors: {
                    'en-US': book["Contributors"]
                },
                isbn: {
                    'en-US': book["ISBN"]
                },
                googleResourceId: {
                    'en-US': book["Google Resource Id"]
                },
            }
        }))
        .then((entry) => console.log(entry))
        .catch(console.error)
}
