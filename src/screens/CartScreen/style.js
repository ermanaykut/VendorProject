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
  actionSheet: {
    width: '95%',
    height: 40,
    padding: 5,
    borderBottomColor: colors.aqua,
    borderBottomWidth: 2,
  },
  totalPriceContainer: {
    right: 10,
  },
  clearCartContainer: {
    left: 10,
  },
  actionSheetContainer: {
    height: 500,
    width: '100%',
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionSheetView: {
    width: '95%',
    height: 400,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 10,
  },
  cancel: {
    width: '95%',
    height: 40,
    marginVertical: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    color: colors.red,
  },
  cancelText:{
    color: colors.red,
  },
 
});
