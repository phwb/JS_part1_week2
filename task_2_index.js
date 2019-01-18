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
    result = result.reverse();
    var finalResult = result.join();
    return finalResult;
};
