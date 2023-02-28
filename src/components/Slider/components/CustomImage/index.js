import {View, Text, Pressable} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import styles from './style';

export default function CustomImage({item, onPressed}) {
  return (
    <Pressable key={item?.url + Math.random().toString()} onPress={onPressed}>
      <FastImage
        style={styles.image}
        source={{
          uri: item?.url,
        }}
      />
    </Pressable>
  );
}
