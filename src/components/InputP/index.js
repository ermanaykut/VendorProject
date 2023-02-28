import React, {useState} from 'react';

import {TextInput} from 'react-native-paper';
// import MaskInput from 'react-native-mask-input';

import {colors} from '../../constants/colors';

export default function InputP({
  label = '',
  placeholder = '',
  value,
  onChange = () => {},
  mode = 'outlined',
  outlineColor = colors.white,
  activeColor = colors.darkblue,
  left,
  right,
  autoCorrect = false,
  disabled = false,
  dense = false,
  textColor = colors.darkblue,
  style = {},
  multiline = false,
  error = false,
  onFocus = () => {},
  editable = true,
  autoCapitalize = 'none',
  onPressOut = () => {},
  onPressIn = () => {},
  onBlur = () => {},
  secureTextEntry = false,
  // render = () => {props => <MaskInput {...props} mask="+[00] [000] [000] [000]" />},
}) {
  return (
    <TextInput
      label={label}
      placeholder={placeholder}
      value={value}
      onChangeText={onChange}
      mode={mode}
      outlineColor={outlineColor}
      activeOutlineColor={activeColor}
      left={left}
      right={right}
      disabled={disabled}
      dense={dense}
      textColor={textColor}
      multiline={multiline}
      style={[{backgroundColor: 'transparent'}, style]}
      onFocus={onFocus}
      onBlur={onBlur}
      error={error}
      autoCorrect={autoCorrect}
      editable={editable}
      autoCapitalize={autoCapitalize}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      secureTextEntry={secureTextEntry}
      // render={render}
    />
  );
}
