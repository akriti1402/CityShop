module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    ['module:react-native-dotenv'], // For .env file support
    'react-native-reanimated/plugin', // This must be at the END
  ],
};




