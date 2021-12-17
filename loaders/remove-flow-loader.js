const flowRemoveTypes = require('flow-remove-types');
const { getOptions } = require("loader-utils");
const validateOptions = require("schema-utils");

const schema = {
  type: "object",
  properties: {
    test: {
      type: "string",
    },
  },
};

const loader = function (content, map, meta) {
  const options = getOptions(this);

  validateOptions(schema, options, "Example Loader");

  const result = flowRemoveTypes(content, {sourcemaps: true});

  this.callback(null, result.toString(), result.generateMap(), meta);
  return; 
}

module.exports = loader;
