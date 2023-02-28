import {StyleSheet} from 'react-native';
import {colors} from '../../../constants/colors';
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(255,255,255,.4)',
    margin: 10,
    padding: 10,
    borderRadius: 10,
    width: '95%',
    alignSelf: 'center',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent :'center'
  },
  title: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: '300',
    fontVariant: ['small-caps'],
    width: '90%',
  },
  description: {
    marginLeft: 10,
    fontSize: 10,
    width: '80%',
    color: colors.darkgrey,
  },
  priceContainer: {
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',

  },
  fullWidth: {
    width: '50%',
  },
  input: {
    height: 35,
    width: 40,
    textAlign: 'center',
    margin: 0,
    fontSize: 14
  },
  box: {
    marginTop :5,
    backgroundColor: colors.aqua,
    marginHorizontal: 5,
    width: 17,
    height: 17,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
});

export default styles;
