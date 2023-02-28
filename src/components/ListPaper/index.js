import * as React from 'react';
import {List} from 'react-native-paper';

export default function ListPaper({
    left,
    right,
    description,
    title,
    onPress = () => {}
}) {
  return (
    <List.Item
      title={title}
      description={description}
      left={left}
      right={right}
      onPress={onPress}
    />
  );
}
