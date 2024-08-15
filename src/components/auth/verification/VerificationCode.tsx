import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import VerificationCodeComponent from '../../verificationCode/VerificationCodeComponent';
import CustomTouchableOpacity from '../../UI/CustomTouchableOpacity';
import {getLocalUserData} from '../../../core/localStorage/localUserData';
import {
  ISendUserData,
  sendUserData,
} from '../../../api/mockable/post/sendUserData';
import {useNavigation} from '@react-navigation/native';
import {StackNavigation} from '../../../core/navigation/Navigation';
import {ScreenNames} from '../../../core/navigation/types';

const VerificationCode = () => {
  const [fakeCode, setFakeCode] = useState<string>('');
  const [code, setCode] = useState<string>('');

  const {navigate} = useNavigation<StackNavigation>();
  const maxLength = 6;

  const handleResend = async () => {
    setFakeCode('');
    const userData = (await getLocalUserData()) as ISendUserData;
    const code = await sendUserData(userData);
    setFakeCode(code);
  };
  useEffect(() => {
    handleResend(); //імітація
  }, []);
  const handleRegister = () => {
    if (fakeCode === code) {
      navigate(ScreenNames.HomeScreen);
    }
  };

  return (
    <View style={styles.layout}>
      <Text>fake verification code: {fakeCode}</Text>
      <VerificationCodeComponent
        style={{color: '#30B0C7'}}
        layoutStyle={code.length === maxLength && {borderColor: '#A180DC'}}
        value={code}
        onChangeText={e => setCode(e)}
        label="Secure Code"
        maxLength={maxLength}
      />
      <TouchableOpacity onPress={handleResend}>
        <Text style={styles.link}>Resend the Code</Text>
      </TouchableOpacity>

      <CustomTouchableOpacity
        title={'Sign up'}
        style={code.length < maxLength && {opacity: 0.25}}
        theme="secondary"
        disabled={code.length < maxLength}
        onPress={handleRegister}
      />
    </View>
  );
};

export default VerificationCode;

const styles = StyleSheet.create({
  layout: {
    gap: 32,
    width: '100%',
    alignItems: 'center',
  },
  link: {
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 20,
    color: '#00D1AC',
    textDecorationLine: 'underline',
  },
});
