# fast-flow-webpack

`esbuild-loader` improves `webpack` build perf significantly.
Since `esbuild` doesn't support `flow`, neither does its loader.

This project shows how to get around this by removing flow types
from code before passing it of to `esbuild-loadder`.  It implements
a very simple loader to remove flow types first.  

The webpack.config.js file and example/ directory shows how to
use this loader.
