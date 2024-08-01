const sumAll = function (firstNum, secondNum) {
    let sum = 0;
    let firstNonInt = (firstNum - Math.floor(firstNum)) !== 0;
    let secondNonInt = (secondNum - Math.floor(secondNum)) !== 0;

    if (typeof firstNum !== "number"
        || firstNum < 0 || firstNonInt
        || typeof secondNum !== "number"
        || secondNonInt || secondNum < 0) {
        sum = "ERROR";
    }
    else if (firstNum < secondNum) {
        for (let i = firstNum; i <= secondNum; i++) {
            sum += i;
        }
    }
    else {
        for (let i = secondNum; i <= firstNum; i++) {
            sum += i;
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
