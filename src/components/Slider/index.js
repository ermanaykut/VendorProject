import {View, Dimensions, FlatList} from 'react-native';
import React, {useState} from 'react';
import CustomImage from './components/CustomImage';
import styles from './style';

const {width} = Dimensions.get('screen');

export default function Slider({
  images = [],
  pagingEnabled = true,
  onPressed = () => {},
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  const onHandledScrollToEnd = value => {
    const itemWidth = value.nativeEvent?.contentOffset.x;
    const index = Math.round(itemWidth / (width * 0.96));
    setActiveIndex(index);
  };

  const renderImages = ({item}) => (
    <CustomImage item={item} onPressed={() => onPressed(activeIndex)} />
  );

  return (
    <View>
      <FlatList
        key={'#'}
        data={images ?? []}
        renderItem={renderImages}
        horizontal
        pagingEnabled={pagingEnabled}
        onMomentumScrollEnd={onHandledScrollToEnd}
        showsHorizontalScrollIndicator={false}
      />
      <View style={styles.indicator}>
        {images?.map((x, index) => {
          return (
            <View
              style={[
                activeIndex == index
                  ? styles.activeIndicator
                  : styles.passiveIndicator,
                styles.itemIndicator,
              ]}
            />
          );
        })}
      </View>
    </View>
  );
}
