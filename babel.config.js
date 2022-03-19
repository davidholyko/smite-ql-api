module.exports = function babelConfig(api) {
  api.cache.using(() => process.env.NODE_ENV);

  const config = {
    presets: [
      // present list
      [
        '@babel/preset-env',
        {
          targets: {
            node: 16,
            esmodules: true,
          },
        },
      ],
    ],
    plugins: [
      // plugin list
    ],
  };

  return config;
};
