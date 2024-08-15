import {BackHandler, StyleSheet, Text, View} from 'react-native';
import React, {memo, useEffect} from 'react';

const HomeScreen = memo(() => {
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        return true;
      },
    );
    return () => backHandler.remove();
  }, []);

  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
});

export default HomeScreen;

const styles = StyleSheet.create({});
