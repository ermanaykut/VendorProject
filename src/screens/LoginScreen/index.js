//React && React Native
import {
  Alert,
  Keyboard,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';

//Third Party
import {getAsyncItem, setAsyncItem} from '../../utils/functions/AsyncStorage';
import {TextInput} from 'react-native-paper';

//Components
import Icon from '../../components/Icon';
import Loader from '../../components/Loader/LoadingCart';
import Button from '../../components/Button';
import InputP from '../../components/InputP';

//Styles && Constants
import {colors} from '../../constants/colors';
import styles from './style';
// import MaskInput from 'react-native-mask-input';

const LoginScreen = ({navigation}) => {
  const [mail, setMail] = useState('');
  const [error, setError] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(true);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const validate = () => {
    Keyboard.dismiss();
    let valid = true;
    if (!mail) {
      handleError('Please input email', 'email');
      valid = false;
    }

    if (!password) {
      valid = false;
      handleError('Please enter password', 'password');
    }
    if (valid) {
      login();
    }
  };

  const onSuccess = response => {
    const user = response?.find(x => x.email == mail);
    const userIndex = response?.findIndex(x => x.email == mail);
    if (password == user.password) {
      response[userIndex] = {...response[userIndex], loggedIn: true};
      setAsyncItem('user', response, () =>
        navigateTo('TabNavigation', {userDetails: user}),
      );
    } else Alert.alert('Error', 'Invalid details');
  };

  const onError = err => {
    console.log(err);
    Alert.alert('Error', 'Invalid details');
  };

  const onFinally = () => {
    setLoading(false);
  };

  const login = () => {
    setLoading(true);
    getAsyncItem('user', onSuccess, onError, onFinally);
  };

  const handleError = (errorMessage, input) => {
    setErrors(prevState => ({...prevState, [input]: errorMessage}));
  };

  const navigateTo = (routeName = 'RegistrationScreen', params = {}) => {
    navigation.navigate(routeName, {...params});
  };

  const onShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <SafeAreaView style={styles.mainContainer}>
      {loading ? (
        <Loader />
      ) : (
        <ScrollView style={styles.contentContainer}>
          <Text style={styles.text}>Login</Text>
          <Text style={styles.text2}>Enter Your Details to Login</Text>
          <View style={styles.inputContainer}>
            <InputP
              label="Email"
              placeholder="Enter Your email"
              value={mail}
              style={styles.bosluk}
              // render={()=>{
              //   if (mail) setMasked(true);
              //   else setMasked(false);
              // }}
              onChange={value => {
                setMail(value);
                if (value.length <= 3) setError(true);
                else setError(false);
              }}
              onFocus={() => {
                if (mail) setError(false);
                else setError(true);
              }}
              onBlur={() => {
                if (mail) setError(false);
                else setError(true);
              }}
              error={error}
              textColor={error ? colors.red : colors.blue}
              left={
                <TextInput.Icon
                  icon={() => (
                    <Icon
                      name="mail : Ionicons"
                      size={25}
                      color={error ? 'red' : 'blue'}
                    />
                  )}
                />
              }
            />
            <InputP
              label="Password"
              placeholder="Enter Your Password"
              value={password}
              secureTextEntry={showPassword}
              onChange={x => {
                setPassword(x);
                if (x.length <= 5) setError(true);
                else setError(false);
              }}
              onFocus={() => {
                if (password) setError(false);
                else setError(true);
              }}
              onBlur={() => {
                if (password) setError(false);
                else setError(true);
              }}
              error={error}
              textColor={error ? colors.red : colors.blue}
              left={
                <TextInput.Icon
                  icon={() => (
                    <Icon
                      name="lock-closed-outline : Ionicons"
                      size={25}
                      color={error ? 'red' : 'blue'}
                    />
                  )}
                />
              }
              right={
                <TextInput.Icon
                  icon={() =>
                    showPassword ? (
                      <Icon
                        name="eye : Ionicons"
                        size={25}
                        color={error ? 'red' : 'blue'}
                      />
                    ) : (
                      <Icon
                        name="eye-off : Ionicons"
                        size={25}
                        color={error ? 'red' : 'blue'}
                      />
                    )
                  }
                  onPress={onShowPassword}
                />
              }
            />

            <Button
              style={styles.buttonStyle}
              title={'Login'}
              onPress={validate}
            />

            <Text style={styles.text3}>
              Don't have an account?
              <Text onPress={() => navigateTo()} style={styles.text4}>
                Register
              </Text>
            </Text>
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default React.memo(LoginScreen);
