module.exports = {
  presets: ['module:@react-native/babel-preset'],
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
          '@routes': './src/routes',
          '@screens': './src/screens',
          '@store': './src/store',
          '@types': './src/types',
          '@utils': './src/utils',
        }
      }
    ],
    ['module:react-native-dotenv'],
    ["nativewind/babel"]
  ]
};
