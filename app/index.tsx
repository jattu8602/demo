import { View, Text,Button } from 'react-native';
import React, { useState } from 'react';
import CounterFC from './CounterFC';

const Index = () => {
  const onLayoutHandler = (e) => {
    const { width, height } = e.nativeEvent.layout;
    console.log('Width:', width, 'Height:', height);
  }

  return (
    <View
      style={{

        alignContent: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',




      }}
    >
      <View
        style={{
          width: 120,
          height: 120,
          backgroundColor: 'red',
          alignContent: 'center',
          justifyContent: 'center',
          borderRadius: 60,
        }}
      >
        <Text
          onLayout={onLayoutHandler}
          // numberOfLines={1}
          style={{
            color: 'white',
            fontSize: 24,
            fontWeight: 'bold',
            textAlign: 'center',
            // backgroundColor: 'black',
          }}
        >
          Fuck Us!
        </Text>
      </View>
    </View>
  )
};

export default Index;
