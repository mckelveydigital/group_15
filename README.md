# README #

Instructions on where to edit and save files, how to use gulp etc.

Edit your javascript files in the folder /js/custom/ - everyone has a file with their name.

There is one general javascript file called general.js, this is for scripts that are general to the whole application and not just the code you are working on.

The same procedure can be followed for sass and css. In the /sass folder there will be a file with your name, use this to add any styles you are working on. style.scss is for general application styles, media.scss will hold any media queries for the application.

Use npm to install gulp on your local machine. The gulpfile has been set up to work with the files specified above. Simply open your terminal, cd into your local site folder and run 'gulp watch' to start gulp watching your files for changes.

All javascript is concatenated into a single file called all.js which should be included in the footer of the page after jQuery. Individual .js files have an alphabetical prefix to ensure they are minified and added to the concatenated all.js file in the right order. The same process is followed for .scss files.

Set up your database connection in connection.php with your own details for your local environment.

### Technologies ###

* PHP using the SLIM framework
* Javascript with jQuery and AJAX
* GULP
* SASS written in SCSS
* Angular.js