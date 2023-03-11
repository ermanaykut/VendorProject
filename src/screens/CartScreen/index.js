import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {styles} from './style';
import {useDispatch, useSelector} from 'react-redux';
import BasketItem from './BasketItem';
import {setBasket} from '../../store/slices/cart-slice';
import {useNetInfo} from '@react-native-community/netinfo';
import {errorMessage} from '../../utils/functions/GlobalMessages';

import ActionSheet from 'react-native-actions-sheet';

import moment from 'moment';

const CartScreen = () => {
  const cart = useSelector(state => state.cart);
  const [totalPrice, setTotalPrice] = useState(0);

  const arr = [...cart?.basket];
  const dispatch = useDispatch();
  const netInfo = useNetInfo();
  const actionSheetRef = useRef();

  useEffect(() => {
    calculateTotalPrice();
  }, [arr]);

  const payment = () => {
    if (netInfo.isConnected) {
    } else errorMessage('Lütfen internet bağlantınızı kontrol ediniz');
  };

  const calculateTotalPrice = () => {
    let price = 0;
    arr.map(x => {
      const {item = {}, amount = 1} = x ?? {};
      price += Number(item?.price) * Number(amount);
    });
    setTotalPrice(price);
  };

  const clearCart = () => {
    dispatch(setBasket([]));
  };

  const renderBasketItem = ({item}) => <BasketItem basket={item} />;

  const renderActionSheetFlatItem = ({item}) => {
    let productSubPrice = 0;
    productSubPrice = item?.amount * item?.item?.price;
    return (
      <View style={styles.actionSheet}>
        <Text>$ {item?.item?.title} </Text>
        <Text>$ {productSubPrice} </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text>Date: {moment().fromNow()}</Text>
      <FlatList data={cart?.basket} renderItem={renderBasketItem} />
      {arr.length != 0 && (
        <Pressable
          onPress={clearCart}
          style={[styles.clearCartContainer, styles.absoluteButton]}>
          <Text>Clear Cart</Text>
        </Pressable>
      )}
      <Pressable
        onPress={() => {
          arr.length != 0 ? actionSheetRef.current.show() : null;
        }}
        style={[styles.totalPriceContainer, styles.absoluteButton]}>
        <Text>Total Price: ${totalPrice}</Text>
      </Pressable>
      <Text onPress={payment}>Ödeme Yap</Text>
      <ActionSheet
        ref={actionSheetRef}
        snapPoints={[30, 60, 100]}
        initialSnapIndex={0}
        gestureEnabled={true}
        defaultOverlayOpacity={0.4}
        containerStyle={styles.actionSheetContainer}>
        <View style={styles.actionSheetView}>
          <FlatList data={arr} renderItem={renderActionSheetFlatItem} />
        </View>
        <Pressable
          onPress={() => actionSheetRef.current.hide()}
          style={styles.cancel}>
          <Text style={styles.cancelText}>Cancel</Text>
        </Pressable>
      </ActionSheet>
    </View>
  );
};

export default React.memo(CartScreen);
