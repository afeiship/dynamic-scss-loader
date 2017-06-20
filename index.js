var loaderUtils = require("loader-utils");
module.exports = function(source) {
  var query = loaderUtils.parseQuery(this.query);
  console.log('start..................',query);
  return source.replace('ci', 'my-ci');
};
