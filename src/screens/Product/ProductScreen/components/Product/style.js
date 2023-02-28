import {Dimensions, StyleSheet} from 'react-native';
import { colors } from '../../../../../constants/colors';


const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lemon,
  },
  productsText: {
    color: colors.blue,
    margin: 5,
    fontVariant: ['small-caps'],
    fontWeight: '400',
    fontSize: 16,
    alignSelf: 'center',
  },
  productContainer: {
    marginHorizontal: 5,
  },
  imageStyle: {
    height: 200,
    width: (width - 60) / 2,
    borderRadius: 25,
    marginVertical: 10,
    borderWidth: 1,
  },
  textContainer: {
    backgroundColor: 'rgba(0,0,0,.6)',
    borderRadius: 5,
    alignItems: 'center',
    width: '80%',
    height: 45,
    position: 'absolute',
    bottom: 15,
    alignSelf: 'center',
  },
  textStyle: {
    fontSize: 20,
    fontWeight: '900',
    textAlign: 'center',
    color: colors.babypink,
    fontVariant: 'small-caps',
  },
  priceStyle: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.white,
  },
});

export default styles;
