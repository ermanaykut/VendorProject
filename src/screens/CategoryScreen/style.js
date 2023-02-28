import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';
import globalStyle from '../../constants/style';

const {width} = Dimensions.get('window')
const {height} = Dimensions.get('window')

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
    alignSelf: 'center'
  },
  textButton:{
    flexDirection :'row',
    justifyContent: 'space-around',
    borderWidth: 1,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 10,
    borderColor: colors.blue,
    width: (width - 70),
    height: 50,
    backgroundColor: colors.lightgrey,
    marginHorizontal: 35,
    marginVertical: 8,
    alignItems: 'center',
  },
  textStyle:{
    fontSize: 20,
    fontWeight: 500,
    color: colors.dodgerblue,
    fontVariant: 'small-caps',
  }

});

export default styles;
