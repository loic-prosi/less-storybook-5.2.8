module.exports = function({ config }) {
  config.module.rules.push({
    test: /\.less$/,
    use: ["style-loader", "css-loader", "less-loader"]
  });
  return config;
};
