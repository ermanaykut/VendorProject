import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';
const {width} = Dimensions.get('screen');
const styles = StyleSheet.create({
  container: {
    width,
    flexDirection: 'row',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  leftContainer: {
    width: width * 0.1,
  },
  indicatorText: {
    textAlign: 'center',
    color: colors.white,
    fontSize: 16,
    width: width * 0.8,
  },
  closeContainer: {
    width: width * 0.1,
  },
});
export default styles;
