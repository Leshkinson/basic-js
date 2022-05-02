const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
    const insert = (arr, index, newItem) => [...arr.slice(0, index), newItem, ...arr.slice(index)];
    const arrayOfIndex = arr.reduce((acc, item, index) => {
        return item === -1 ? [...acc, index] : acc;
    }, []);
    const arrayOfPositiveValues = arr
        .filter((item) => {
            return item >= 0;
        })
        .sort((a, b) => a - b);
    return arrayOfIndex.reduce((array, item) => {
        return insert(array, item, -1);
    }, arrayOfPositiveValues);
}

module.exports = {
    sortByHeight,
};
