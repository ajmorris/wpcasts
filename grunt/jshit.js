module.exports = {
    all: {
        files: [
            // 'Gruntfile.js',
            // 'js/script.js',
            // 'js/plugins/clear-default-text.js',
            // 'js/plugins/jquery.cookie.js',
            // 'js/plugins/ce-plugins.js',
            // 'js/plugins/util-functions.js',
            // 'js/plugins/gf_likert.js',
            // 'js/plugins/skip-link-focus-fix.js',
            // 'js/plugins/jquery.sticky.js'
        ],
        options: {
          ignores: [
            // 'js/foundation/*.js',
            // 'js/vendor/*.js',
            // 'js/min/*.js'
          ],
        },
        globals: {
            curly: true,
            debug: true,
            eqeqeq: true,
            strict: true,
            white: true,
            jQuery: true
        },
    }
};