const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
    if (arr.constructor !== Array) {
        return "'arr' parameter must be an instance of the Array!";
    }
    let customizableArray = [...arr];
    //console.log("arrX", customizableArray);
    customizableArray.map((item, index, array) => {
        // console.log("item", item);
        // console.log("index", index);
        // console.log("array", array);
        if (item === "--discard-next") {
            array.splice(index + 1, 1);
            array.splice(index, 1);
        }
        if (item === "--double-prev") {
            array.splice(index, 0, array[index - 1]);
            array.splice(index + 1, 1);
        }
        if (item === "--double-next") {
            array.splice(index, 0, array[index + 1]);
            array.splice(index + 1, 1);
        }
        if (item === "--discard-prev") {
            array.splice(index - 1, 1);
            array.splice(index - 1, 1);
        }
        return array;
    });
    let arrX = customizableArray.filter((item) => {
        return item !== "--double-prev" && item !== "--discard-prev";
    });
    return arrX;
}

module.exports = {
    transform,
};
