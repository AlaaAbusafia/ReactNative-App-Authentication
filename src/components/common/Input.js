import React from 'react';
import { View, TextInput, Text } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry}) => {
  const { inputStyle, labelStyle, containerStyle } = styles;
  return(
    <View style= {containerStyle} >
      <Text style= {labelStyle} >{label}</Text>
      <TextInput
          secureTextEntry = {secureTextEntry}
          placeholder = {placeholder}
          autoCorrect = {false}
          value= {value}
          onChangeText = {onChangeText}
          style={inputStyle}
       />
    </View>
  );

}

const styles = {
  inputStyle: {
    color: '#333',
    padding: 7,
    paddingLeft: 10,
    fontSize: 14,
    lineHeight: 23,
    flex: 3,
    borderWidth: 1,
    borderColor: '#cfcfcf',
    borderRadius: 5,
    shadowColor: '#333',
    shadowOffset: { width: 1, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    marginRight: 5


  },
  labelStyle: {
    fontSize: 16,
    color: '#777',
    paddingLeft: 15,
    flex: 1
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }

}
export { Input } ;
