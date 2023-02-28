import {Dimensions, StyleSheet} from 'react-native';
const {width} = Dimensions.get('screen');
const styles = StyleSheet.create({
  image: {
    width: width * 0.96,
    height: 200,
  },
});
export default styles;
