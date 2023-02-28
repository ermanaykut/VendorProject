import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import styles from './style';
import Button from '../../components/Button';
import {getAsyncItem, setAsyncItem} from '../../utils/functions/AsyncStorage';

const ProfileScreen = ({navigation, route}) => {
  const {userDetails = {}} = route?.params ?? {};
  const onSuccess = response => {
    const user = response?.find(x => x.email == userDetails.email);
    const userIndex = response?.findIndex(x => x.email == userDetails.email);
    if (userDetails.password == user.password) {
      response[userIndex] = {...response[userIndex], loggedIn: false};
      setAsyncItem('user', response, () => {
        navigation.navigate('LoginScreen');
      });
    } else Alert.alert('Error', 'Invalid details');
  };
  const logout = () => {
    getAsyncItem('user', onSuccess);
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Text style={styles.text}>
        Welcome <Text style={styles.text2}>{userDetails?.fullname}</Text>
      </Text>
      <View style={styles.button}>
        <Button title="Logout" onPress={logout} />
      </View>
    </SafeAreaView>
  );
};

export default React.memo(ProfileScreen);
