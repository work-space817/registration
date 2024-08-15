import AsyncStorage from '@react-native-async-storage/async-storage';
import {ISendUserData} from '../../api/mockable/post/sendUserData';

export const setLocalUserData = async (value: ISendUserData) => {
  try {
    if (value) {
      await AsyncStorage.setItem('name', value.name);
      await AsyncStorage.setItem('lastName', value.lastName);
      await AsyncStorage.setItem('phoneNumber', value.phoneNumber);
    }
  } catch (error) {
    console.error('AsyncStorage Error: ', error);
  }
  return value;
};

export const getLocalUserData = async () => {
  try {
    const name = await AsyncStorage.getItem(`name`);
    const lastName = await AsyncStorage.getItem(`lastName`);
    const phoneNumber = await AsyncStorage.getItem(`phoneNumber`);
    return {name, lastName, phoneNumber};
  } catch (error) {
    console.error('AsyncStorage Error: ', error);
  }
};
