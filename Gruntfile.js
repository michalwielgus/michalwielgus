module.exports = function(grunt) {
   grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                options: {
                    style: 'expanded'
                },
                files: {
                    'css/style.css': 'sass/main.scss',
                }
            }
        },
        cssmin: {
            combine: {
                files: {
                    'css/style.min.css': ['css/style.css']
                }
            }
        },
        watch: {
            scripts: {
                files: ['sass/main.scss','css/style.css'],
                tasks: ['sass', 'cssmin']
            }
        } 
    });
    //Ładowanie zadania
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
};