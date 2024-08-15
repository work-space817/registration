import {Dimensions, StyleSheet, Text, View, ViewProps} from 'react-native';
import React, {FC} from 'react';

interface IAuthLayout extends ViewProps {
  subtitle?: string;
}

const AuthLayout: FC<IAuthLayout> = props => {
  const {height} = Dimensions.get('window');
  return (
    <View {...props} style={styles.defaultStyle}>
      <View style={[styles.defaultInfo, {marginTop: height * 0.2}]}>
        <Text style={styles.title}>Welcome to App</Text>
        <Text style={styles.subtitle}>{props.subtitle}</Text>
      </View>
      {props.children}
    </View>
  );
};

export default AuthLayout;

const styles = StyleSheet.create({
  defaultStyle: {
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 16,
    gap: 40,
  },
  defaultInfo: {
    gap: 8,
    alignItems: 'center',
  },
  title: {
    fontWeight: '600',
    fontSize: 24,
    lineHeight: 28.8,
    color: '#14171D',
  },
  subtitle: {
    color: '#667085',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 22.4,
    textAlign: 'center',
  },
});
