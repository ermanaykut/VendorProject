import React from 'react';
import {View, Text, Pressable} from 'react-native';

import FastImage from 'react-native-fast-image';
import {useNavigation} from '@react-navigation/native';

import styles from './style';

export default function Product({item, products}) {
  const navigation = useNavigation();
  const obj = {
    id: item.id,
    title: item?.title,
    products: products,
  };
  const onPressedItem = () => {
    navigation.navigate('ProductDetail', obj);
  };

  return (
    <Pressable style={styles.productContainer} onPress={onPressedItem}>
      <FastImage
        style={styles.imageStyle}
        source={{
          uri: item?.thumbnail,
        }}
      />
      <View style={styles.textContainer}>
        <Text numberOfLines={1} style={styles.textStyle}>
          {item.title}
        </Text>
        <Text style={styles.priceStyle}>{item.price}$</Text>
      </View>
    </Pressable>
  );
}
