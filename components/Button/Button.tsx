import * as React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Dimensions} from 'react-native';

export type ButtonProps = {
  onPress: () => void;
  text: string;
  type: 'primary' | 'secondary' | 'tertiary';
  size?: 'large' | 'medium' | 'small'; 
  marginVertical?: number;
};

const {width: screenWidth} = Dimensions.get('window'); 

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 25,
    alignSelf: 'center', 
    flexGrow: 0,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Roboto',
    fontWeight: '500',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  primary: {
    backgroundColor: '#F45622',
  },
  secondary: {
    backgroundColor: '#033826',
  },
  tertiary: {
    backgroundColor: '#D12178',
  },
});

export const Button = ({text, onPress, type, size = 'medium', marginVertical = 8}: ButtonProps) => {
  let buttonStyle: object;
  let buttonWidth: number;

  switch (type) {
    case 'primary':
      buttonStyle = styles.primary;
      break;
    case 'secondary':
      buttonStyle = styles.secondary;
      break;
    case 'tertiary':
      buttonStyle = styles.tertiary;
      break;
    default:
      buttonStyle = styles.primary;
      break;
  }

  switch (size) {
    case 'large':
      buttonWidth = screenWidth * 0.8;
      break;
    case 'medium':
      buttonWidth = screenWidth * 0.6;
      break;
    case 'small':
      buttonWidth = screenWidth * 0.3;
      break;
    default:
      buttonWidth = screenWidth * 0.6;
      break;
  }

  return (
    <View style={[styles.buttonContainer, {marginVertical}]}>
      <TouchableOpacity
        testID="button-touchable"
        style={[styles.button, buttonStyle, {width: buttonWidth}]}
        onPress={onPress}
        activeOpacity={0.8}>
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};
