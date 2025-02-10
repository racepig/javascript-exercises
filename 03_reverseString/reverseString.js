const reverseString = function(str) {
    let arr = str.split("")
    arr.reverse()
    let result = arr.join("")
    return result
};

// Do not edit below this line
module.exports = reverseString;
