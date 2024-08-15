import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackNavigation} from '../../../core/navigation/Navigation';
import {ScreenNames} from '../../../core/navigation/types';
import * as yup from 'yup';
import {useFormik} from 'formik';
import CustomTextInput from '../../UI/CustomTextInput';
import CustomTouchableOpacity from '../../UI/CustomTouchableOpacity';
import {
  ISendUserData,
  sendUserData,
} from '../../../api/mockable/post/sendUserData';
import {setLocalUserData} from '../../../core/localStorage/localUserData';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Register = () => {
  const init: ISendUserData = {
    name: '',
    lastName: '',
    phoneNumber: '',
  };
  const [loading, setLoading] = useState<boolean>(false);
  const {navigate} = useNavigation<StackNavigation>();

  const onSubmitHandler = async (values: ISendUserData) => {
    try {
      setLoading(true);
      navigate(ScreenNames.VerifyScreen);
      const code = await sendUserData(values);
      await setLocalUserData(values);
      await AsyncStorage.setItem('fakeCode', code.toString()); //mock
      handleReset(values);
      setLoading(false);
    } catch (error: any) {
      console.log('error: ', error);
      setLoading(false);
    }
  };
  const checkUpForm = yup.object({
    name: yup.string().required('Field should not be empty'),
    lastName: yup.string().required('Field should not be empty'),
    phoneNumber: yup.number().typeError('Please enter numbers'),
  });
  const formik = useFormik({
    initialValues: init,
    onSubmit: onSubmitHandler,
    validationSchema: checkUpForm,
  });

  const {
    touched,
    errors,
    values,
    handleSubmit,
    handleChange,
    handleReset,
    setFieldError,
    setFieldValue,
  } = formik;

  return (
    <View style={styles.layout}>
      <View style={styles.formLayout}>
        <CustomTextInput
          label="Name"
          value={values.name}
          onChangeText={handleChange('name')}
          clientSideError={errors.name}
          touched={touched.name}
          placeholder="Enter name"
          autoCapitalize={'words'}
        />
        <CustomTextInput
          label="Last Name"
          value={values.lastName}
          onChangeText={handleChange('lastName')}
          clientSideError={errors.lastName}
          touched={touched.lastName}
          placeholder="Enter last name"
          autoCapitalize={'words'}
        />
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
          title={'Continue'}
          theme={loading ? 'primary' : 'secondary'}
          onPress={handleSubmit}
          disabled={loading}
        />
      </View>
      <View style={styles.optionalText}>
        <Text>Do you have an account?</Text>
        <TouchableOpacity onPress={() => navigate(ScreenNames.LoginScreen)}>
          <Text style={styles.toLogin}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Register;

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
