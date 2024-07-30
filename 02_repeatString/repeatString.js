const repeatString = function (word, numOfRep) {
    let result = "";
    for (let i = 0; i < numOfRep; i++) {
        result += word;
    }
    if (numOfRep < 0) {
        return "ERROR";
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
