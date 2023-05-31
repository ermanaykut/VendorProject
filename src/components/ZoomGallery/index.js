import {Pressable, SafeAreaView, Text, View} from 'react-native';
import React from 'react';

import ImageViewer from 'react-native-image-zoom-viewer';
import {Portal} from 'react-native-paper';

import Icon from '../Icon';

import styles from './style';
import {colors} from '../../constants/colors';

export default function ZoomGallery({
  visible = false,
  images = [],
  index = 0,
  onSwipeDown = () => {},
  outRenderIndicator = null,
}) {
  const renderIndicator = (activeIndex, itemCount) => { //parametreler nasıl tanımlı?
    if (outRenderIndicator) return outRenderIndicator();
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.leftContainer} />
        <Text style={styles.indicatorText}>
          {activeIndex + ' / ' + itemCount}
        </Text>
        <Pressable onPress={onSwipeDown} style={styles.closeContainer}>
          <Icon name="close : ant" size={25} color={colors.white} />
        </Pressable>
      </SafeAreaView>
    );
  };
  return (
    <Portal>
      {visible && (
        <ImageViewer
          imageUrls={[...images]}
          index={index}
          enableSwipeDown
          enableImageZoom
          onSwipeDown={onSwipeDown}
          renderIndicator={renderIndicator}
        />
      )}
    </Portal>
  );
}
