module.exports = function override(config, env) {
    config.plugins = config.plugins.filter(
      (plugin) => plugin.constructor.name !== "MiniCssExtractPlugin"
    );
    return config;
  };