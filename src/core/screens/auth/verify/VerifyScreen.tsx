import {View, Text} from 'react-native';
import React, {memo} from 'react';
import AuthLayout from '../../../layouts/AuthLayout';
import VerificationCode from '../../../../components/auth/verification/VerificationCode';

const VerifyScreen = memo(() => {
  return (
    <AuthLayout subtitle="Enter the confirmation code that will be sent to you by SMS">
      <VerificationCode />
    </AuthLayout>
  );
});

export default VerifyScreen;
