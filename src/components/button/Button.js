import React from 'react';
import {View, Text, TouchableHighlight} from 'react-native';

const Button = props => {
  const {label, event} = props;
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
      }}>
      <View>
        <TouchableHighlight
          style={{
            width: '25%',
            textAlign: 'center',
            backgroundColor: '#ffb703',
            padding: 8,
            borderRadius: 5,
            color: '#023047',
          }}
          onPress={event}
          activeOpacity={0.6}
          underlayColor="#DDDDDD">
          <Text>{label}</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default Button;
