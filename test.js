require('@babel/register')({
  presets: [
    '@teedev/babel-preset-base',
  ],
  ignore: [
    'node_modules',
    'dist',
    'test-dist',
  ],
  extensions: [
    '.ts',
    '.js',
  ],
});
