const removeFromArray = function (arr, ...params) {
    for (let i = 0; i <= params.length; i++) {
        for (let j = 0; j <= arr.length; j++) {
            if (arr[j] === params[i]) {
                arr.splice(j, 1);
            }
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
