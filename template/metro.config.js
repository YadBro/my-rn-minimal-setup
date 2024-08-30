const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const { withNativeWind } = require('nativewind/metro')

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  resolver: {
    enableGlobalPackages: true
  }
};

const configMerge = mergeConfig(getDefaultConfig(__dirname), config);

module.exports = withNativeWind(configMerge, { input: './global.css'})