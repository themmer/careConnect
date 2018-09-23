'use strict';

const env = process.env.EMBER_ENV;
const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const Funnel = require('broccoli-funnel');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    sassOptions: {
      includePaths: ['node_modules/ember-paper/app/styles', 'node_modules/roboto-npm-webfont']
    },

    // Fingerprinting
    fingerprint: {
      exclude: ['assets/icons/'],
      enabled: env === 'production' || env === 'staging'
    },

    // Source Map Options
    sourcemaps: {
      enabled: true,
      extensions: ['js']
    }
    // Add options here
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  // Roboto Google Font
  const robotoFonts = new Funnel('node_modules/roboto-npm-webfont/light/fonts', {
    srcDir: '/',
    include: ['**/*.woff2'],
    destDir: '/assets/fonts'
  });

  return app.toTree(robotoFonts);
};
