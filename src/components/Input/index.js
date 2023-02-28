import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import styles from './style';
import {colors} from '../../constants/colors';

const Input = ({
  label,
  error,
  password,
  email,
  phone,
  fullname,
  onFocus = () => {},
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hidePassword, setHidePassword] = useState(password);
  const onEyepress = () => {
    setHidePassword(!hidePassword);
  };

  const ImageFunc = () => {
    let image = '';

    switch (label.toLowerCase()) {
      case 'email':
        image = require('../../assets/envelope.png');
        break;
      case 'fullname':
        image = require('../../assets/user.png');
        break;
      case 'phone':
        image = require('../../assets/phone.png');
        break;
      case 'password':
        image = require('../../assets/lock.png');
        break;
      default:
        image = require('../../assets/lock.png');
    }
    return <Image style={styles.image} source={image} />;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer([error, isFocused])}>
        <ImageFunc />
        <TextInput
          secureTextEntry={hidePassword}
          autoCorrect={false}
          onFocus={() => {
            onFocus();
            setIsFocused(true);
          }}
          onBlur={() => {
            setIsFocused(false);
          }}
          placeholderTextColor={colors.dodgerblue}
          style={styles.inputText}
          {...props}
        />

        {password ? (
          <TouchableOpacity onPress={onEyepress}>
            <Image
              style={styles.image2}
              source={
                hidePassword
                  ? require('../../assets/blueeye.png')
                  : require('../../assets/blueclosedeye.png')
              }
            />
          </TouchableOpacity>
        ) : null}
      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

export default React.memo(Input);
