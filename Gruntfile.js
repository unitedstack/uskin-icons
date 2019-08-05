'use strict';

const fs = require('fs');

module.exports = (grunt) => {
  grunt.initConfig({
    webfont: {
        icons: {
          src: 'svg_icons/*.svg',
          dest: 'dist/fonts',
          options: {
            types: 'eot,woff,ttf,svg',
            syntax: 'bem',
            stylesheet: 'less',
            relativeFontPath: './fonts',
            destHtml: 'demo_icons/',
            templateOptions: {
              baseClass: 'glyphicon',
              classPrefix: 'icon-'
            },
            callback: function() {
              const src = 'dist/fonts/icons.less';
              const dest = 'dist/icons.less';
              fs.renameSync(src, dest);
            }
          }
        }
      },
  });

  grunt.loadNpmTasks('grunt-webfont');

  grunt.registerTask('build', ['webfont']);
  grunt.registerTask('default', ['webfont']);
};
