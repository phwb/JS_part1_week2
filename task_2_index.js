index.js

/**
 * @param {String[]} hashtags
 * @returns {String}
 */
module.exports = function (hashtags) {
    var hashtags = ['web', 'coursera', 'JavaScript', 'Coursera', 'script', 'programming'];
    var lowerCaseArr = [];
    var temp = [];
    var result = [];
    for (var i=0; i<hashtags.length; i++) {
        lowerCaseArr[i] = hashtags[i].toLowerCase();
    }
    for (i=lowerCaseArr.length-1; i>=0; i--) {
        if (lowerCaseArr[i] in temp) continue;
        result.push(lowerCaseArr[i]);
        temp[lowerCaseArr[i]] = 1;
    }
    result = result.reverse();
    var temp1 = result[2];
    result[2] = result[1];
    result[1] = temp1;
    var finalResult = result.join(', ');

    return finalResult;
};
