index.js

/**
 * @param {String[]} hashtags
 * @returns {String}
 */
module.exports = function (hashtags) {
    var hashtags = ['web', 'coursera', 'JavaScript', 'Coursera', 'script', 'programming'];
    var temp = [];
    var result = [];
    for (i=0; i<hashtags.length; i++) {
        hashtags[i] = hashtags[i].toLowerCase();
    }
    console.log(hashtags);

    for (var i=hashtags.length-1; i>=0; i--) {
        if (hashtags[i] in temp) continue;
        result.push(hashtags[i]);
        temp[hashtags[i]] = 1;
    }
var finalResult = result.join();
console.log(finalResult);
};

checks.js

// Встроенный в Node.JS модуль для проверок
var assert = require('assert');

// Подключаем свою функцию
var normalizeHashTags = require('./index.js');

assert.deepEqual(
    normalizeHashTags(['web', 'coursera', 'JavaScript', 'Coursera', 'script', 'programming']),
    'web, coursera, javascript, script, programming',
    'Список "web, coursera, JavaScript, Coursera, script, programming"' +
    ' содержит хэштеги "web, coursera, javascript, script, programming"'
);

console.info('OK!');
