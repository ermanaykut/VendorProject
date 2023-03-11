import React from 'react';
import { colors } from '../../constants/colors';
import Icon from '../Icon';

export default function IconFunc({item}) {

  switch (item) {
    case 'smartphones':
      return <Icon name="smartphone : Feather" size={30} color={colors.darkgrey} />;

    case 'laptops':
      return <Icon name="laptop : matcom" size={30} color={colors.darkgrey} />;

    case 'fragrances':
      return <Icon name="spray : matcom" size={30} color={colors.darkgrey} />;

    case 'skincare':
      return <Icon name="face-woman-shimmer-outline : matcom" size={30} color={colors.darkgrey} />;

    case 'groceries':
      return <Icon name="fruit-cherries : matcom" size={30} color={colors.darkgrey} />;

    case 'home-decoration':
      return <Icon name="home-city-outline : matcom" size={30} color={colors.darkgrey} />;

    case 'furniture':
      return <Icon name="sofa-outline : matcom" size={30} color={colors.darkgrey} />;

    case 'tops':
      return <Icon name="shirt :  Ionicons" size={30} color={colors.darkgrey} />;

    case 'womens-dresses':
      return <Icon name="woman : Ionicons" size={30} color={colors.darkgrey} />;

    case 'womens-shoes':
      return <Icon name="shoe-heel : matcom" size={30} color={colors.darkgrey} />;

    case 'mens-shirts':
      return <Icon name="account-tie-outline : matcom" size={30} color={colors.darkgrey} />;

    case 'mens-shoes':
      return <Icon name="shoe-formal : matcom" size={30} color={colors.darkgrey} />;

    case 'mens-watches':
      return <Icon name="watch : Feather" size={30} color={colors.darkgrey} />;

    case 'womens-watches':
      return <Icon name="watch : matcom" size={30} color={colors.darkgrey} />;

    case 'womens-bags':
      return <Icon name="shopping-bag : MatIcon" size={30} color={colors.darkgrey} />;

    case 'womens-jewellery':
      return <Icon name="necklace : matcom" size={30} color={colors.darkgrey} />;

    case 'sunglasses':
      return <Icon name="sunglasses : matcom" size={30} color={colors.darkgrey} />;

    case 'automotive':
      return <Icon name="car : matcom" size={30} color={colors.darkgrey} />;

    case 'motorcycle':
      return <Icon name="motorbike : matcom" size={30} color={colors.darkgrey} />;

    case 'lighting':
      return <Icon name="ios-bulb : Ionicons" size={30} color={colors.darkgrey} />;

    default:
      return <Icon name="smartphone : matcom" size={30} color={colors.darkgrey} />;
  }
}
