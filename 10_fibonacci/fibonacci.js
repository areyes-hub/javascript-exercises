const fibonacci = function (n1) {
    if (n1 === 0 || n1 === "0") {
        return 0;
    }
    else if (n1 < 0) {
        return "OOPS";
    }
    else {
        let fib = [1, 1, 2]
        for (let i = 2; i < n1; i++) {
            fib.push(+fib[i] + (+fib[i - 1]));
        }
        return fib[n1 - 1];
    }
};

// Do not edit below this line
module.exports = fibonacci;
