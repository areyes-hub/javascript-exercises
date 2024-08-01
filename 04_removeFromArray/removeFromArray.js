const removeFromArray = function (arr, ...params) {
    const finArr = [];
    arr.forEach((item) => {
        if (!params.includes(item)) {
            finArr.push(item);
        }
    });
    return finArr;
};

// Do not edit below this line
module.exports = removeFromArray;
