import axios from 'axios';

export interface ISendUserLogin {
  phoneNumber: string;
}

const URL = 'http://demo5261570.mockable.io/login/';

export const sendUserLogin = async (values: ISendUserLogin) => {
  try {
    const response = await axios.post(URL, values);
    if (response.data.phoneNumber == values.phoneNumber) {
      return true;
    }
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
