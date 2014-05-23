module.exports = {
  first: ['concat', 'compass:prod'],
  second: ['concat', 'compass:dev'],
  third: ['uglify'],
  fourth: ['compress'],
  fifth: ['version'],
  last: ['watch']
};