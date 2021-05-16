module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'babel-plugin-root-import',
      {
        rootPathPrefix: '~',
        rootPathSuffix: 'app/src',
      },
    ],
    'optional-require',
    'react-native-paper/babel',
  ],
};
