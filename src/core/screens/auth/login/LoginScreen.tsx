import {StyleSheet, Text, View} from 'react-native';
import React, {memo} from 'react';
import AuthLayout from '../../../layouts/AuthLayout';
import Login from '../../../../components/auth/login/Login';

const LoginScreen = memo(() => {
  return (
    <AuthLayout subtitle="Please enter your details">
      <Login />
    </AuthLayout>
  );
});

export default LoginScreen;

const styles = StyleSheet.create({});
