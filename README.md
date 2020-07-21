# Site Starter

I've found myself leaning on github pages more and more for static sites.  Because I've this I've built this template repo as a staring point for static sites using [Gulp](https://gulpjs.com/) and [Github Pages](https://pages.github.com/).  In theory you shouldn't need to mess with any of the Gulp setting but instead just add files to their correct directories and modify the config file and the build the site.

# Usage

## Use This Template
Start by clicking "Use this template" and create this repo into your own account.  This will then give you a place to customize your site.

## Create gh-pages branch
Create `gh-pages` branch and push manually one time.  I recommend that you [create an empty branch](https://stackoverflow.com/questions/34100048/github-create-empty-branch) for `gh-pages` and then push that with a simple "hello world" HTML page.  By doing this you will signify to the backend processes at GitHub that you plan on using gh-pages and that they should build your site.  If you don't, you'll have to spend a bunch of wasted time reaching out to support to get them to enable it.  Learn from my mistake.  Push something, anything, to the `gh-pages` branch manually at least once.

## Configuration
By default the only thing you need to change in the `config/default.json` file is going to be the `site.url` key.  This is used when generating the `sitemap.xml`.  If you do not want to automatically generate a `sitemap.xml` you can set `site.sitemap` to `false` and it won't be generated.

## Content
Now you're ready to build your actual site.  Just put your content and it's structure under the `html/pages` directory.  The HTML files in there use [Nunjucks](https://mozilla.github.io/nunjucks/) for templating and the Gulp scripts support both the `html` and `nunjucks` file extensions.  You can modify / add more templates in the `templates` directory and your pages or other templates can utilize them.

### SASS / CSS
I'd recommend using the `sass` directory for your styles.  This also allows you to install things via NPM and include them into your SASS files.  You can see in the [Bulma](https://bulma.io/documentation/customize/with-node-sass/) example how to install it with NPM and then simply add your `@import` line to include it.

However if you want to just do CSS then it can go into the `css` directory and they will be copied over wholesale.

### Javascript
Place your javascript files in the `js` directory.  Because it's using [Browserify](http://browserify.org/) you can use NPM and `require` to include requirements.

### Images
All png, jpg, gif and svg files placed in the `img` directory will be copied over in the same structure that they exist.

### Static CSS / Javascript
Sometimes you need CSS or Javascript that comes from somewhere else or does not include SASS hooks.  These can be either put directly in the `js` or `css` directories or can be installed via something like NPM or [Yarn](https://yarnpkg.com/) and then the paths to the Javascript or CSS files added to the `static_files.js` or `static_files.css` array.  These paths are relative to the root of the repository.

# Testing
The easiest way to test this is to run `npm run watch`.  This will run a live-refreshing server on port `9000` that you can develop your site with.  You can change the bind address, port and if you want it to live-refresh by changing the `server` settings in `config/default.json`

# Building
Start by [creating a personal access token](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line) and then add that to your [secrets](https://help.github.com/en/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets) as `ACCESS_TOKEN`.  Once that has been done then you can `git mv .github/disabled-workflows/build.yml .github/workflows/build.yml` and push you changes.  This should run the lint and build process and shortly your site should be available on the domain.