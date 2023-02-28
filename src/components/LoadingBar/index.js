import React from 'react';

import {ProgressBar} from 'react-native-paper';

import {colors} from '../../constants/colors';

export default function LoadingBar({loading = true, color = colors.aqua}) {
  return <ProgressBar indeterminate visible={loading} color={color} />;
}
