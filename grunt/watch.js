module.exports = {
    compass: {
        files: '**/*.scss',
        tasks: ['compass:dev', 'version']
    },

    php: {
        files: ['*.php', 'inc/{,*}*.php'],
    },

    js: {
        files: ['js/*.js', '*.js'],
        tasks: ['jshint', 'concat', 'uglify'],
        options: {
            spawn: false
        }
    },

    livereload: {
        files: ['**/.css', 'js/min/*.js', '*.php'],
        options: {
            livereload: true
        }
    }
};