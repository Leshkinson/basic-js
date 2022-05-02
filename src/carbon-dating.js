const { NotImplementedError } = require("../extensions/index.js");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
    const START_ACTIVITY_ISOTOPE = 15;
    const HALF_LIFE_PERIOD = 5730;
    const k = 0.693 / HALF_LIFE_PERIOD;
    const stringCondition = typeof sampleActivity !== "string" || !sampleActivity;
    const excludeFalseyCondition = !(isFinite(sampleActivity) && +sampleActivity > 0);
    if (stringCondition || excludeFalseyCondition) {
        return false;
    }
    // if (typeof sampleActivity !== "string" || !sampleActivity) {
    //     return false;
    // }

    // if (!(isFinite(sampleActivity) && +sampleActivity > 0)) {
    //     return false;
    // }
    const t = Math.ceil(Math.log(START_ACTIVITY_ISOTOPE / sampleActivity) / k);
    return t < 0 ? false : t;
}

module.exports = {
    dateSample,
};
