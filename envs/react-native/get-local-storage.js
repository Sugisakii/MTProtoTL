const AsyncStorage = require('@react-native-async-storage/async-storage');
function getLocalStorage() {
  return {
    set: AsyncStorage.default.setItem,
    get: AsyncStorage.default.getItem
  }
}

module.exports = getLocalStorage;
