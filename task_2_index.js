index.js

/**
 * @param {String[]} hashtags
 * @returns {String}
 */
module.exports = function (hashtags) {
    
    var arr = [];
    for (var i=0; i<hashtags.length; i++) {
    arr[i] = hashtags[i].toLowerCase();
    }

    var result = [];
    for (var i=0; i<arr.length; i++) {
    var a = arr[i];
    if (result.indexOf(a) === -1) {
      result.push(a);
    }
    }
    result = result.join(', ');
    return result;
};
