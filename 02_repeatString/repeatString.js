const repeatString = function(str, num) {
    if (num < 0) return "ERROR";
    let i = 0;
    let result = "";
    while (i < num){
        console.log(str);
        result += str;
        i++;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
