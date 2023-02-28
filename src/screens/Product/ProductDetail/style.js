import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../../constants/colors';

const {width} = Dimensions.get('window');
const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lemon,
    paddingHorizontal: width * 0.02,
  },
  image: {
    width: 250,
    height: 250,
    alignSelf: 'center',
    marginTop: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.babypink,
  },
  brandContainer: {
    flexDirection: 'row',
    marginVertical: 5,
    alignSelf: 'center',
  },
  brand: {
    fontSize: 40,
    fontWeight: '500',
    fontVariant: 'small-caps',
    color: colors.white,
    shadowOpacity: 1,
  },
  description: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    color: colors.darkgrey,
    fontSize: 16,
    marginLeft: 5,
    marginTop: 5,
  },
  descriptionText: {
    fontWeight: '500',
    alignItems: 'center',
    color: colors.grey,
    fontSize: 15,
    marginLeft: 5,
    marginTop: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    shadowOpacity: 0.4,
  },
});

export default styles;
