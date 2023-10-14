import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const IconButton = ({ children, icon, size, iconColor, onPress, buttonStyle, textStyle }) => {
  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
      <Text style={textStyle}>
        {children} <Ionicons name={icon} size={size} color={iconColor} />
      </Text>
    </TouchableOpacity>
  );
};

export default IconButton;
