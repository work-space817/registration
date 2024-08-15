import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewStyle,
} from 'react-native';
import React, {FC} from 'react';

interface ICustomTouchableWIthOpacity extends TouchableOpacityProps {
  theme?: 'primary' | 'secondary';
  title: string;
  onPress?: (e: any) => void;
}

const CustomTouchableOpacity: FC<ICustomTouchableWIthOpacity> = ({
  theme = 'primary',
  ...props
}) => {
  let bgByTheme: ViewStyle = {};
  let textByTheme: TextStyle = {};

  switch (theme) {
    case 'primary':
      bgByTheme = {
        backgroundColor: '#FFFFFF',
        borderColor: '#C4C5C6',
      };
      textByTheme = {
        color: '#14171D',
      };
      break;
    case 'secondary':
      bgByTheme = {backgroundColor: '#30B0C7'};
      textByTheme = {color: '#FFFFFF'};
      break;
  }
  return (
    <TouchableOpacity
      {...props}
      style={[styles.defaultLayout, bgByTheme, props.style]}>
      <Text style={[styles.title, textByTheme]}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default CustomTouchableOpacity;

const styles = StyleSheet.create({
  defaultLayout: {
    width: '100%',
    borderRadius: 8,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#30B0C7',
    paddingHorizontal: 18,
    paddingVertical: 10,
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
  },
});
