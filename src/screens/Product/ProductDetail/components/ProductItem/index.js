import {View, Text, Pressable} from 'react-native';
import React from 'react';
import styles from './style';
import FastImage from 'react-native-fast-image';

export default function ProductItem({item, onPressed}) {
  return (
    <Pressable onPress={() => onPressed(item)} style={styles.container}>
      <FastImage source={{uri: item?.thumbnail}} style={styles.image} />
      <Text style={styles.text}>{item?.brand}</Text>
      <Text style={styles.text}>{item?.title}</Text>
    </Pressable>
  );
}
