import {View, Text, Pressable} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './style';
import FastImage from 'react-native-fast-image';
import Icon from '../../../components/Icon';
import {useDispatch, useSelector} from 'react-redux';
import {setBasket} from '../../../store/slices/cart-slice';
import {useIsFocused} from '@react-navigation/native';

export default function BasketItem({basket}) {
  const {item = {}, amount = 1} = basket ?? {};
  const [itemAmount, setItemAmount] = useState(amount.toString());

  const cartBasket = useSelector(state => state.cart)?.basket;
  const isFocused = useIsFocused();
  const dispatch = useDispatch();
  let arr = [...cartBasket];

  useEffect(() => {
    if (isFocused) {
      setItemAmount(amount);
    }
  }, [isFocused]);

  const onPressedBox = type => {
    let obj = {
      ...item,
    };
    if (type == '-') {
      if (Number(itemAmount) > 1) {
        obj = {...obj, amount: Number(itemAmount) - 1};
        setItemAmount((Number(itemAmount) - 1).toString());
      }
    } else {
      obj = {...obj, amount: Number(itemAmount) + 1};
      setItemAmount((Number(itemAmount) + 1).toString());
    }
    
    const basketItemIndex = arr.findIndex(x => x?.item?.id == item?.id);
    arr[basketItemIndex] = {
      ...arr[basketItemIndex],
      amount: Number(obj.amount),
    };
    dispatch(setBasket(arr));
  };

  const onPressedDelete = () => {
    arr = arr?.filter(x => x?.item?.id != item?.id)
    dispatch(setBasket(arr));
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <FastImage source={{uri: item?.thumbnail}} style={styles.image} />
        <View style={styles.fullWidth}>
          <Text numberOfLines={2} style={styles.title}>
            {item?.title}
          </Text>
          <Text numberOfLines={2} style={styles.description}>
            {item?.description}
          </Text>
        </View>
        <View style={styles.priceContainer}>
          <View style={styles.row}>
            {Number(itemAmount) == 1 ? (
              <Pressable style={styles.box} onPress={() => onPressedDelete()}>
                <Icon name="delete: ant" size={12} />
              </Pressable>
            ) : (
              <Pressable style={styles.box} onPress={() => onPressedBox('-')}>
                <Text>-</Text>
              </Pressable>
            )}
            <Text>{itemAmount}</Text>
            <Pressable style={styles.box} onPress={() => onPressedBox('+')}>
              <Text>+</Text>
            </Pressable>
          </View>
          <Text style= {{fontSize: 12, marginTop: 4}}>Unit: ${item?.price}</Text>
        </View>
      </View>
    </View>
  );
}
