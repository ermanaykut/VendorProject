import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';

const {width} = Dimensions.get('screen');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.babypink,
  },
  absoluteButton: {
    position: 'absolute',
    bottom: 10,
    width: width * 0.33,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,.4)',
    borderRadius: 10,
  },
  totalPriceContainer: {
    right: 10,
  },
  clearCartContainer: {
    left: 10,
  },
});
