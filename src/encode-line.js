const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
    let map = new Map();
    const getTempAccValue = (arr, index, currentAcc) => {
        const previusKey = arr[index - 1];
        const previusLetterValue = map.get(previusKey);
        let tempAcc = "";
        if (previusLetterValue === 1) {
            tempAcc = `${currentAcc}${previusKey}`;
        } else {
            tempAcc = `${currentAcc}${previusLetterValue}${previusKey}`;
        }
        return [tempAcc, previusKey];
    };

    const mapSetter = (currentLetter) => {
        if (map.has(currentLetter)) {
            let letterValue = map.get(currentLetter);
            map.set(currentLetter, letterValue + 1);
        } else {
            map.set(currentLetter, 1);
        }
    };

    const accSetter = (currentAcc, index, letter, arr, isLast) => {
        if (isLast) {
            const [tempAcc] = getTempAccValue(arr, index, currentAcc);
            mapSetter(letter);
            return `${tempAcc}${letter}`;
        }
        const [tempAcc, previusKey] = getTempAccValue(arr, index, currentAcc);
        map.delete(previusKey);
        mapSetter(letter);
        return tempAcc;
    };

    const arrayFromString = str.split("").reduce((acc, letter, index, arr) => {
        if (index === 0) {
            mapSetter(letter);
            return acc;
        }
        if (index === arr.length - 1 && letter === arr[index - 1]) {
            mapSetter(letter);
            const letterValue = map.get(letter);
            return letterValue === 1 ? `${acc}${letter}` : `${acc}${letterValue}${letter}`;
        }
        if (letter === arr[index - 1]) {
            mapSetter(letter);
            return acc;
        }
        const isLast = index === arr.length - 1;
        return accSetter(acc, index, letter, arr, isLast);
    }, "");

    return arrayFromString;
}

module.exports = {
    encodeLine,
};
