import {StyleSheet} from 'react-native';
import {colors} from '../../../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    width: 200,
    marginTop: 20,
    marginHorizontal: 10,
    borderRadius: 20,
    height: 200,
    backgroundColor: colors.dodgerblue,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 150,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  text: {
    color: colors.white,
    marginVertical: 1
  }
});

export default styles;
