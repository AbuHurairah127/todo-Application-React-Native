import React from 'react';
import {style} from './HeaderStyle';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Header = props => {
  return (
    <View style={style.container}>
      <View style={style.headerTextContainer}>
        <Text style={style.headerText}>Todos</Text>
      </View>
      <View style={style.iconContainer}>
        <TouchableOpacity onPress={props.deleteAll}>
          <Icon name="delete-sweep" size={40} color="#d90429" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
