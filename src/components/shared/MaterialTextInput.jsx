import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { GlobalStyles } from '../../themes/styles';

const MaterialTextInput = ({ label, secureTextEntry, customStyles, onChangeText }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState('');

  return (
    <View style={[styles.container, customStyles]}>
      <Text style={[styles.label, (isFocused || inputValue) && styles.labelFocused]}>{label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        style={[styles.input]}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChangeText={(text) => {
          setInputValue(text);
          onChangeText(text);
        }}
        value={inputValue}
        // underlineColorAndroid={isFocused ? 'blue' : 'gray'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 18,
  },
  label: {
    position: 'absolute',
    left: 0,
    top: 30,
    fontSize: 16,
    color: 'gray',
  },
  labelFocused: {
    fontSize: 12,
    top: 4,
    color: GlobalStyles.colors.lightGray,
  },
  input: {
    height: 40,
    fontSize: 16,
    color: GlobalStyles.colors.gray,
    fontWeight: 'bold',
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
});

export default MaterialTextInput;
