module.exports = {
  presets: ['module:@react-native/babel-preset', 'nativewind/babel'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          src: './src',
          '@assets': './src/assets',
          '@components': './src/components',
          '@config': './src/config',
          '@data': './src/data',
          '@hooks': './src/hooks',
          '@interfaces': './src/interfaces',
          '@routes': './src/routes',
          '@screens': './src/screens',
          '@store': './src/store',
          '@theme': './src/theme',
          '@types': './src/types',
          '@utils': './src/utils',
        }
      }
    ],
    ['module:react-native-dotenv'],
  ],
};
