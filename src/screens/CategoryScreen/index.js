import React, {useEffect, useState} from 'react';

import {useNavigation} from '@react-navigation/native';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';

import LoadingBar from '../../components/LoadingBar';
import IconFunc from '../../components/Image';

import categoryService from '../../services/category-service';

import styles from './style';

export default function CategoryScreen() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    setLoading(true);
    categoryService
      .getCategories()
      .then(res => {
        const arr = [];
        let obj = {};
        res?.data?.map(x => {
          obj = {
            name: x,
            icon: x,
          };
          arr.push(obj);
        });
        setCategories(arr);
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const renderCategories = ({item}) => {
    const onProductPress = () => {
      navigation.navigate('ProductScreen', {name: item.name});
    };

    return (
      <TouchableOpacity onPress={onProductPress} style={styles.textButton}>
        <Text style={styles.textStyle}>{item.name}</Text>
        <IconFunc item={item?.icon} />
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <LoadingBar loading={loading} />
      <FlatList data={categories} renderItem={renderCategories} />
    </View>
  );
}
