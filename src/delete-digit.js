const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(number) {
    const arrayOfNumber = Array.from(String(number));
    return arrayOfNumber
        .reduce((acc, item, index, array) => {
            let copyArray = [...array];
            copyArray.splice(index, 1);
            return [...acc, +copyArray.join("")];
        }, [])
        .sort((a, b) => a - b)
        .pop();
}

module.exports = {
    deleteDigit,
};
