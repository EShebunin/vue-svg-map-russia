module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: browsers,
        useBuiltIns: 'usage',
        corejs: '3.15',
      },
    ],
  ],
};
