import axios from 'axios';

export interface ISendUserData {
  name: string;
  lastName: string;
  phoneNumber: string;
}

const URL = 'http://demo5261570.mockable.io/register/';

export const sendUserData = async (values: ISendUserData) => {
  try {
    const response = await axios.post(URL, values);

    return response.data.verificationCode;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
