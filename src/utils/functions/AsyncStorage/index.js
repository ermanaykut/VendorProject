import AsyncStorage from '@react-native-async-storage/async-storage';

const setAsyncItem = (
  storageName,
  inputs,
  onSuccess = () => {},
  onError = () => {},
  onFinally = () => {},
) => {
  AsyncStorage.setItem(storageName, JSON.stringify(inputs))
    .then(onSuccess)
    .catch(err => onError(err))
    .finally(onFinally);
};

const getAsyncItem = async (
  storageName,
  onSuccess = () => {},
  onError = () => {},
  onFinally = () => {},
) => {
  await AsyncStorage.getItem(storageName)
    .then(res => JSON.parse(res))
    .then(response => {
      onSuccess(response);
    })
    .catch(err => onError(err))
    .finally(onFinally);
};

export {setAsyncItem, getAsyncItem};
