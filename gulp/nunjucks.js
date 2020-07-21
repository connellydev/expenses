/**
 * Outputs the number with a fixed length decimal points
 * @param {Number} num The number to output
 * @param {Number} length The number of digits to display
 * @return {String} The fixed length decimal point number
 */
function fixed(num, length) {
    return num.toFixed(length || 2);
}

/**
 * Outputs the booking format of the string
 * @param {Number} num The number to output
 * @param {Number} length The number of digits to display
 * @returns {String} The booking formatted version of the string
 */
function booking(num, length) {
    if (num < 0) {
        return `(${fixed(Math.abs(num), length)})`;
    }

    return fixed(num, length);
}

/**
 * Manage the nunjucks environment
 * @param {Object} environment The nunjucks environment
 * @return {undefined}
 */
function manage_environment(environment) {
    environment.addFilter('fixed', fixed);
    environment.addFilter('booking', booking);
}

module.exports = manage_environment;