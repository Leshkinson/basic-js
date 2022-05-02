const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
    if (!(members != null && members.constructor === Array)) {
        return false;
    }

    const arrayOfStrings = members.filter((item) => typeof item === "string");
    if (arrayOfStrings.length === 0) {
        return false;
    }

    let arrayWithoutWhitespace = arrayOfStrings.reduce((arrayWithoutWhitespace, name) => {
        return [...arrayWithoutWhitespace, name.trim()];
    }, []);

    return arrayWithoutWhitespace
        .map((name) => {
            return name[0].toUpperCase();
        })
        .sort()
        .join("");
}

module.exports = {
    createDreamTeam,
};
