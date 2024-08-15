import {StyleSheet, Text, TextInput, View, ViewStyle} from 'react-native';
import React, {FC, memo, useState} from 'react';
import CustomTextInput, {ICustomTextInput} from '../UI/CustomTextInput';

const VerificationCodeComponent: FC<ICustomTextInput> = memo(props => {
  return (
    <View style={styles.layout}>
      {props.label && <Text style={styles.label}>{props.label}</Text>}
      <View style={styles.inputsLayout}>
        <TextInput
          maxLength={props.maxLength}
          style={[styles.textInput]}
          value={props.value}
          keyboardType={'phone-pad'}
          onChangeText={props.onChangeText}
        />
        <View style={[styles.inputsLayout]}>
          {[...Array(props.maxLength)].map((_, index) => (
            <CustomTextInput
              value={props.value[index]}
              key={index}
              maxLength={1}
              placeholder="0"
              textAlign="center"
              keyboardType={'phone-pad'}
              layoutStyle={[
                styles.inputOutter,
                {borderColor: props.clientSideError && 'red'},
                props.layoutStyle as ViewStyle,
              ]}
              style={[styles.inputInner]}
              editable={true}
            />
          ))}
        </View>
      </View>
      {props.clientSideError && (
        <Text style={styles.errorText}>{props.clientSideError}</Text>
      )}
    </View>
  );
});

export default VerificationCodeComponent;

const styles = StyleSheet.create({
  layout: {
    marginVertical: 15,
    gap: 15,
  },
  label: {
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 16.8,
  },
  inputsLayout: {
    width: '100%',
    position: 'relative',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
  },
  inputOutter: {
    borderColor: '#EEE8F0',
    borderWidth: 1,
    borderRadius: 8,
    width: 50,
    height: 64,
  },
  inputInner: {
    flex: 1,
    width: '100%',
    borderWidth: 0,
    fontWeight: '600',
    fontSize: 40,
    lineHeight: 48,
  },
  textInput: {
    overflow: 'hidden',
    width: '100%',
    height: '100%',
    zIndex: 9999,
    position: 'absolute',
    fontSize: 0,
  },
  errorText: {
    color: 'red',
    marginTop: 5,
  },
});
