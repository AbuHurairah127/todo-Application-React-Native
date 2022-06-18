import React from 'react';
import {View, Text} from 'react-native';

const Header = () => {
  return (
    <View>
      <Text
        style={{
          backgroundColor: '#023047',
          textAlign: 'center',
          color: '#8ecae6',
          fontSize: 25,
          padding: 8,
        }}>
        Todo Application
      </Text>
    </View>
  );
};

export default Header;
