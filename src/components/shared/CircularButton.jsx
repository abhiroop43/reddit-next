import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { GlobalStyles } from '../../themes/styles';

const CircularButton = ({ onPress, children, gradient }) => {
  return (
    <LinearGradient colors={gradient} style={styles.button}>
      <Pressable onPress={onPress}>
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 100,
    height: 100,
    borderRadius: 50,
    // backgroundColor: GlobalStyles.colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: GlobalStyles.colors.secondary,
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default CircularButton;
