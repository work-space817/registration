import {View, Text} from 'react-native';
import React, {memo} from 'react';
import AuthLayout from '../../../layouts/AuthLayout';
import Register from '../../../../components/auth/register/Register';

const RegisterScreen = memo(() => {
  return (
    <AuthLayout subtitle="Please enter your details">
      <Register />
    </AuthLayout>
  );
});

export default RegisterScreen;
