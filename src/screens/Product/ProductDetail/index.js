import React, {useEffect, useState} from 'react';
import {FlatList, Pressable, ScrollView, Text, View} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import _ from 'lodash';

import ZoomGallery from '../../../components/ZoomGallery';
import LoadingBar from '../../../components/LoadingBar';
import ProductItem from './components/ProductItem';
import Slider from '../../../components/Slider';
import Icon from '../../../components/Icon';

import productService from '../../../services/product-service';
import {colors} from '../../../constants/colors';
import styles from './style';
import Button from '../../../components/Button';
import {useDispatch, useSelector} from 'react-redux';
import {setBasket} from '../../../store/slices/cart-slice';

export default function ProductDetail({route}) {
  const {id = -1, products = []} = route?.params ?? {id: -1, products: []};
  const [item, setItem] = useState();
  const [loading, setLoading] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const navigation = useNavigation();

  const basket = useSelector(state => state.cart)?.basket;
  const dispatch = useDispatch();
  let arr = [...basket];

  useEffect(() => {
    getData();
  }, [id]);

  const getData = () => {
    setLoading(true);
    productService
      .getProductDetail(id)
      .then(res => {
        const arr = res?.data?.images?.map(x => {
          return {url: x};
        });
        setItem({...res?.data, images: arr});
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const onPressed = item => {
    const obj = {
      id: item?.id,
      title: item?.title,
      products,
    };
    navigation.navigate('ProductDetail', obj);
  };

  const onPressedSliderItem = activeIndex => {
    setActiveIndex(activeIndex);
    setVisible(true);
  };

  const addToCart = () => {
    const itemIndex = arr?.findIndex(x => x?.item?.id == item?.id);
    //itemIndex'in -1 durumu dizide verilen koşulda elemanı bulamaması demektir.
    //Yazılımda genel bir hata kodu -1'dir
    if (itemIndex == -1) {
      const basketItem = {
        item: item,
        amount: 1,
      };
      arr.push(basketItem);
    }
    //itemIndex baskette elemeanın indexini verir.
    else {
      arr[itemIndex] = {
        ...arr[itemIndex],
        amount: arr[itemIndex].amount + 1,
      };
    }
    dispatch(setBasket(arr));
  };

  const hideGallery = () => {
    setVisible(false);
  };

  const renderProducts = ({item}) => (
    <ProductItem item={item} onPressed={onPressed} />
  );

  return (
    <ScrollView style={styles.container}>
      <LoadingBar loading={loading} />
      <Slider images={item?.images} onPressed={onPressedSliderItem} />
      <View style={styles.brandContainer}>
        <Text style={styles.brand}>
          {item?.brand} {item?.title}
        </Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.descriptionText}>Price: {item?.price}$</Text>
        <Text style={styles.descriptionText}>
          Rating: {item?.rating}
          <Icon name="star-half : Ionicons" size={15} color={colors.orange} />
        </Text>
        <Text style={styles.descriptionText}>Stock: {item?.stock} </Text>
      </View>
      <Text style={styles.description}>Description:</Text>
      <Text style={styles.descriptionText}>{item?.description}</Text>
      <View>
        <FlatList
          data={[...products].filter(product => product?.id != id)}
          renderItem={item => renderProducts(item)}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>

      <Button title="Add To Cart" onPress={addToCart} />

      <ZoomGallery
        visible={visible}
        index={activeIndex}
        images={item?.images}
        onSwipeDown={hideGallery}
        enableImageZoom
      />
    </ScrollView>
  );
}
