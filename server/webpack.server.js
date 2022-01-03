const path = require("path");
const nodeExternals = require("webpack-node-externals");
const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.base");

const serverConfig = {
  target: "node",
  mode: "development",
  entry: "./src/server/index.js",
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "build"),
  },
  node: {
    __filename: false,
    __dirname: false,
  },
  externals: [nodeExternals()],
};

module.exports = merge(baseConfig, serverConfig);
