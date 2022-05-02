const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
    let quantityCat = 0;
    matrix.forEach((item) => {
        item.forEach((ears) => {
            if (ears === "^^") {
                quantityCat = quantityCat + 1;
            }
        });
    });
    return quantityCat;
}

module.exports = {
    countCats,
};
