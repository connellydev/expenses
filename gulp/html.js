const fs = require('fs');
const gulp = require('gulp');
const gulp_connect = require('gulp-connect');
const gulp_nunjucks = require('gulp-nunjucks-render');
const gulp_data = require('gulp-data');
const nunjucks_environment = require('./nunjucks');
const path = require('path');

const constants = require('./constants');

/**
 * Gets the path to the HTML page files
 * @returns {String} The HTML page file path
 */
function page_path() {
    return path.join(__dirname, '..', constants.HTML, constants.PAGES, '**/*.+(html|nunjucks)');
}

/**
 * Gets the path to the HTML template files
 * @returns {String} The HTML template file path
 */
function template_path() {
    return path.join(__dirname, '..', constants.HTML, constants.TEMPLATES, '**/*.+(html|nunjucks)');
}

/**
 * Imports data to the template from the data directory
 * @param {Object} file The file
 * @returns {Object} The data
 */
function data_handler(file) {
    let data = {};
    const data_file = path.join(__dirname, '..', constants.DATA, path.basename(file.path, '.html') + '.json');

    if (fs.existsSync(data_file)) {
        data = JSON.parse(fs.readFileSync(data_file));
    }

    return data;
}

/**
 * Outputs the HTML
 * @returns {Promise} A promise for when the HTML has been outputted
 */
function html() {
    const nunjucks_config = {
        path: [
            path.join(__dirname, '..', constants.HTML, constants.TEMPLATES)
        ],
        manageEnv: nunjucks_environment
    };

    return gulp.src(page_path())
        .pipe(gulp_data(data_handler))
        .pipe(gulp_nunjucks(nunjucks_config))
        .pipe(gulp.dest(constants.getDistDir()))
        .pipe(gulp_connect.reload());
}

/**
 * Watches the HTML files
 * @returns {undefined}
 */
function watch() {
    gulp.watch(page_path(), html);
    gulp.watch(template_path(), html);
}

module.exports = {
    default: html,
    watch: watch
};