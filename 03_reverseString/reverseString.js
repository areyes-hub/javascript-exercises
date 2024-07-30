const reverseString = function (string) {
    let result = "";
    let len = string.length - 1;
    for (let i = len; i >= 0; i--) {
        result += string[i];
    }
    return result;
};

// Do not edit below this line
module.exports = reverseString;
