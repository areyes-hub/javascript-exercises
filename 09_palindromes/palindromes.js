const palindromes = function (string) {
    let reversed = "";
    let reved = "";
    let regex = /[!., ]+/g
    let strLast = string.length - 1;

    for (let i = strLast; i >= 0; i--) {
        reversed += string[i];
        reved = reversed.replaceAll(regex, "").toLowerCase();
    } if (reved === string.replaceAll(regex, "").toLowerCase()) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
