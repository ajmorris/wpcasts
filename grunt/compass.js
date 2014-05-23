module.exports = {
    dev: {
        options: {
            sassDir: 'sass',
            cssDir: 'styleshets',
            fontsDir: 'fonts',
            javascriptDir: 'js',
            imagesDir: 'img',
            relativeAssets: true,
            environment: 'development',
            outputStyle: 'expanded',
            noLineComments: false
        }
    },

    prod: {
        options: {
            sassDir: 'sass',
            cssDir: 'styleshets',
            fontsDir: 'fonts',
            javascriptDir: 'js',
            imagesDir: 'img',
            relativeAssets: true,
            environment: 'production',
            outputStyle: 'compressed',
            noLineComments: true
        }
    }
};
