import React from 'react';

import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/dist/FontAwesome5';
import Fontisto from 'react-native-vector-icons/dist/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import EvilIcons from 'react-native-vector-icons/dist/EvilIcons';
import Foundation from 'react-native-vector-icons/dist/Foundation';
import Zocial from 'react-native-vector-icons/dist/Zocial';
import Feather from 'react-native-vector-icons/Feather';

export default function Icon({name = '', size = 30, color = 'black'}) {
  const iconName = name?.trim()?.split(':')?.[0]?.trim();
  const type = name?.trim()?.split(':')?.[1]?.trim();
  if (iconName && type) {
    switch (type) {
      case 'ant':
        return <AntDesign name={iconName} size={size} color={color} />;
      case 'matcom':
        return (
          <MaterialCommunityIcons name={iconName} size={size} color={color} />
        );
      case 'FontAwe':
        return <FontAwesome name={iconName} size={size} color={color} />;
      case 'FontAwe5':
        return <FontAwesome5 name={iconName} size={size} color={color} />;
      case 'Fonti':
        return <Fontisto name={iconName} size={size} color={color} />;
      case 'MatIcon':
        return <MaterialIcons name={iconName} size={size} color={color} />;
      case 'Ionicons':
        return <Ionicons name={iconName} size={size} color={color} />;
      case 'Entypo':
        return <Entypo name={iconName} size={size} color={color} />;
      case 'Evil':
        return <EvilIcons name={iconName} size={size} color={color} />;
      case 'Found':
        return <Foundation name={iconName} size={size} color={color} />;
      case 'Zocial':
        return <Zocial name={iconName} size={size} color={color} />;
      case 'Feather':
        return <Feather name={iconName} size={size} color={color} />;

      default:
        return <AntDesign name={iconName} size={size} color={color} />;
    }
  }
}
