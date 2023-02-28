import {Dimensions, StyleSheet} from 'react-native';
import { colors } from '../../constants/colors';

const {width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  indicator: {
    position: 'absolute',
    width: width * 0.4,
    height: 6,
    bottom: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  activeIndicator: {
    backgroundColor: colors.aqua,
    height: '100%',
    width: width * 0.4 * 0.5 * 0.96,
  },
  passiveIndicator: {
    backgroundColor: colors.babypink,
    height: '50%',
    width: width * 0.4 * 0.14 * 0.96,
  },
  itemIndicator: {
    marginHorizontal: 2,
    borderRadius: 1000,
  },
});

export default styles;
