module.exports = {
    all: {
      options: {
        mode: 'gzip'
      },
      files: [
        {expand: true, src: ['js/min/*.js'], dest: '.', ext: '.js.gz'},
        {expand: true, src: ['stylesheets/*.css'], dest: '.', ext: '.css.gz'}
      ]
    }
};