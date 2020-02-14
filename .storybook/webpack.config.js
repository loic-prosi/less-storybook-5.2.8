const path = require("path");

module.exports = function({ config, mode }) {
  config.module.rules.push({
    test: /\.less$/,
    use: [
      {
        loader: "style-loader"
      },
      {
        loader: "css-loader"
      },
      {
        loader: "less-loader"
      }
    ]
  });
  return config;
};
