import {
  Dimensions,
  LayoutChangeEvent,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {memo, useState} from 'react';
import IntroductionSVG from '../../../../helpers/SVG/IntroductionSVG';
import CustomTouchableOpacity from '../../../../components/UI/CustomTouchableOpacity';
import {useNavigation} from '@react-navigation/native';
import {StackNavigation} from '../../../navigation/Navigation';
import {ScreenNames} from '../../../navigation/types';

const IntroductionScreen = memo(() => {
  const {width} = Dimensions.get('window');
  const {navigate} = useNavigation<StackNavigation>();

  return (
    <View style={styles.layout}>
      <IntroductionSVG width={'100%'} height={width * 0.75} />
      <View style={styles.viewTitle}>
        <Text style={styles.title}>Welcome to App</Text>
        <Text style={styles.subtitle}>
          Lorem ipsum dolor sit amet consectetur. A ut pellentesque amet
          phasellus augue. Neque at felis pulvinar malesuada varius egestas dis
          cras.
        </Text>
      </View>
      <View style={styles.viewButton}>
        <CustomTouchableOpacity
          theme="secondary"
          title={'Login'}
          onPress={() => navigate(ScreenNames.LoginScreen)}
        />
        <CustomTouchableOpacity
          title={'Register'}
          onPress={() => navigate(ScreenNames.RegisterScreen)}
        />
      </View>
    </View>
  );
});

export default IntroductionScreen;

const styles = StyleSheet.create({
  layout: {
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingHorizontal: 16,
    gap: 32,
  },
  viewTitle: {
    gap: 16,
  },
  title: {
    color: '#14171D',
    fontWeight: '600',
    fontSize: 32,
    lineHeight: 38.4,
    textAlign: 'left',
  },
  subtitle: {
    color: '#14171D',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 19.2,
    textAlign: 'left',
  },
  viewButton: {width: '100%', gap: 8},
});
