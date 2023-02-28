import React, {useEffect} from 'react';
import {Dimensions, View} from 'react-native';
import Lottie from 'lottie-react-native';

import {LoadingWave} from '../../assets/Lottie';
import {colors} from '../../constants/colors';

const {width, height} = Dimensions.get('screen');
const Loader = () => {
  return (
    <View style={{ width, height, backgroundColor: colors.lemon}}>
      <Lottie source={LoadingWave} autoPlay loop />
    </View>
  );
};
export default Loader;
