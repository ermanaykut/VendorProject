import React, {useEffect} from 'react';
import Lottie from 'lottie-react-native';

import {LoadingCart} from '../../assets/Lottie';

export default function Animation() {
  return <Lottie source={LoadingCart} autoPlay loop />;
}
