import React from 'react';
import { View, Text, StyleSheet } from 'react-primitives';

const style = StyleSheet.create({
  wrapper: {
    width: 150,
    borderRadius: '30px',
    backgroundColor: 'red',
    padding: 8,
    cursor: 'pointer',
  },
  text: {
    color: '#FFFFFF',
    textAlign: 'center',
  }
});

export const Button = () => (
  <View style={style.wrapper}>
    <Text style={style.text}>
      Button
    </Text>
  </View>
);
