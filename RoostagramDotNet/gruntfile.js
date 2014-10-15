/// <vs BeforeBuild='default' />
'use strict';

module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
    });

    // Load tasks and configuration.
    grunt.loadTasks('build');

    // Register alias tasks.
    grunt.registerTask('lint',
      'Statically analyze the project JavaScript for errors and code style',
      ['jscs', 'jshint']);

    grunt.registerTask('dev',
      'Start the watch.',
      ['lint', 'watch']);

    grunt.registerTask('default', ['dev']);
};