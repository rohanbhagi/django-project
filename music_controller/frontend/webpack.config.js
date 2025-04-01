const path = require("path");
const webpack = require("webpack");

module.exports = (env, argv) => {
  const isProduction = argv.mode === "production";

  return {
    entry: "./src/index.js",
    output: {
      path: path.resolve(__dirname, "./static/frontend"),
      filename: "[name].js",
      publicPath: "/static/frontend/", // Needed for devServer
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
      ],
    },
    optimization: {
      minimize: isProduction, // Minimize only in production
    },
    devServer: !isProduction
      ? {
          contentBase: path.resolve(__dirname, "./static/frontend"),
          publicPath: "/static/frontend/",
          hot: true,
          port: 3000,
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization",
          },
        }
      : undefined,
    plugins: [
      !isProduction && new webpack.HotModuleReplacementPlugin(), // HMR in dev only
      isProduction &&
        new webpack.DefinePlugin({
          "process.env": {
            NODE_ENV: JSON.stringify("production"),
          },
        }),
    ].filter(Boolean), // Filter out undefined plugins
    mode: isProduction ? "production" : "development", // Set mode dynamically
  };
};
