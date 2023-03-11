import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';
import globalStyle from '../../constants/style';

const {width} = Dimensions.get('window');
const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lemon,
  },
  categoriesText: {
    color: colors.dodgerblue,
    margin: 10,
    fontVariant: ['small-caps'],
    fontWeight: '700',
    alignSelf: 'center',
  },
  textButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: colors.dodgerblue,
    shadowOpacity: 0.7,
    shadowColor: colors.darkblue,
    width: width - 70,
    height: 50,
    backgroundColor: colors.lightgrey,
    marginHorizontal: 35,
    marginVertical: 8,
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 18,
    fontWeight: 600,
    color: colors.darkgrey,
    fontVariant: 'small-caps',
  },
});

export default styles;
