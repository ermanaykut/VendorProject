import {Alert, FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {styles} from './style';
import {useDispatch, useSelector} from 'react-redux';
import BasketItem from './BasketItem';
import {setBasket} from '../../store/slices/cart-slice';
import {useNetInfo} from '@react-native-community/netinfo';
import {errorMessage} from '../../utils/functions/GlobalMessages';
import {SheetProvider} from 'react-native-actions-sheet';
import ActionSheet from 'react-native-actions-sheet';
import {colors} from '../../constants/colors';
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
    return (
      <View
        style={{
          width: '95%',
          height: 40,
          padding: 5,
          borderBottomColor: colors.aqua,
          borderBottomWidth: 2,
        }}>
        <Text>{item?.item?.title}</Text>
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
        containerStyle={{
          height: 500,
          width: '100%',
          backgroundColor: 'transparent',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            width: '95%',
            height: 400,
            backgroundColor: 'white',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            padding: 10,
          }}>
          <FlatList data={arr} renderItem={renderActionSheetFlatItem} />
        </View>
        <Pressable
          onPress={() => actionSheetRef.current.hide()}
          style={{
            width: '95%',
            height: 40,
            marginVertical: 10,
            backgroundColor: 'white',
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: colors.red}}>Cancel</Text>
        </Pressable>
      </ActionSheet>
    </View>
  );
};

export default React.memo(CartScreen);
