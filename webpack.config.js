const path = require("path");

/**@type {import('webpack').Configuration} */
module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "./index.js"),
  devtool: "source-map",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./dist"),
    clean: true,
  },
  cache: {
    type: "filesystem",
    buildDependencies: {
      config: [__filename],
    },
    name: "client",
    cacheDirectory: path.resolve(process.cwd(), 'node_modules/.webpackCache')
  },
  stats: 'detailed'
};
