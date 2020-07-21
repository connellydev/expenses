# Configuration

The biggest config change that will need to take place is to set the `site.url` value.

## Static CSS / Javascript

Sometimes you cannot require Javascript or import CSS via SASS.  In that case you can add the relative path (ie `node_modules/bulma-carousel/dist/js/bulma-carousel.min.js`) to the `static_files.js` or `static_files.css` array and they will get wholesale copied into their respective directories.