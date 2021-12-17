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

const loader = function (source) {
  const options = getOptions(this);

  validateOptions(schema, options, "Example Loader");

  const result = flowRemoveTypes(source, {});
  return result.toString();
}

module.exports = loader;
