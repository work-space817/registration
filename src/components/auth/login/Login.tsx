import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {ScreenNames} from '../../../core/navigation/types';
import CustomTextInput from '../../UI/CustomTextInput';
import CustomTouchableOpacity from '../../UI/CustomTouchableOpacity';
import * as yup from 'yup';
import {useFormik} from 'formik';
import {useNavigation} from '@react-navigation/native';
import {StackNavigation} from '../../../core/navigation/Navigation';
import {
  ISendUserLogin,
  sendUserLogin,
} from '../../../api/mockable/post/sendUserLogin';

const Login = () => {
  const init: ISendUserLogin = {
    phoneNumber: '', //12345
  };
  const [loading, setLoading] = useState<boolean>(false);
  const {navigate} = useNavigation<StackNavigation>();

  const onSubmitHandler = async (value: ISendUserLogin) => {
    try {
      setLoading(true);
      const result = await sendUserLogin(value);
      if (result) {
        navigate(ScreenNames.HomeScreen);
        handleReset(values);
      }
      setLoading(false);
    } catch (error: any) {
      console.log('error: ', error);
      setLoading(false);
    }
  };
  const checkUpForm = yup.object({
    phoneNumber: yup
      .number()
      .min(4, 'Password must have at least 4 number')
      .positive('Value can not be less than 0')
      .typeError('Please enter numbers')
      .required('Field should not be empty'),
  });
  const formik = useFormik({
    initialValues: init,
    onSubmit: onSubmitHandler,
    validationSchema: checkUpForm,
  });

  const {touched, errors, values, handleSubmit, handleChange, handleReset} =
    formik;
  return (
    <View style={styles.layout}>
      <View style={styles.formLayout}>
        <CustomTextInput
          label="Phone number"
          value={values.phoneNumber}
          inputMode="numeric"
          onChangeText={handleChange('phoneNumber')}
          clientSideError={errors.phoneNumber}
          touched={touched.phoneNumber}
          placeholder="Enter phone number"
        />
        <CustomTouchableOpacity
          title={'Login'}
          theme={loading ? 'primary' : 'secondary'}
          onPress={handleSubmit}
          disabled={loading}
        />
      </View>
      <View style={styles.optionalText}>
        <Text>Don’t have an account?</Text>
        <TouchableOpacity onPress={() => navigate(ScreenNames.RegisterScreen)}>
          <Text style={styles.toLogin}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  layout: {
    width: '100%',
    gap: 16,
    alignItems: 'center',
  },
  formLayout: {
    width: '100%',
    gap: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  optionalText: {
    gap: 4,
    height: 20,
    alignItems: 'center',
    flexDirection: 'row',
  },
  toLogin: {
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 20,
    color: '#00D1AC',
    textDecorationLine: 'underline',
  },
});
