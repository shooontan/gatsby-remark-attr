const remarkAttr = require('remark-attr');

module.exports.setParserPlugins = options => {
  return [[remarkAttr, options]];
};
