import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView} from 'react-native';

import Loader from '../../../components/Loader/LoadingWave';
import Product from './components/Product';

import productService from '../../../services/product-service';

import styles from './style';

export default function ProductScreen({route}) {
  const {name = ''} = route.params ?? ''; 

  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    setLoading(true);
    productService
      .getProducts(name)
      .then(res => {
        setProducts(res?.data?.products);
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        setTimeout(() => {
          setLoading(false);
        }, 100);
      });
  };

  const renderProducts = ({item}) => (
    <Product item={item} products={products} />
  );

  return (
    <SafeAreaView style={styles.container}>
      {loading && <Loader />}
      <FlatList
        numColumns={'2'}
        data={products}
        renderItem={renderProducts}
        style={{paddingHorizontal: 15}}
      />
    </SafeAreaView>
  );
}
