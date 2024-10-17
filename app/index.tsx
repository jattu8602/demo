import { View, Text, Image } from 'react-native';
import React from 'react';

const Index = () => {
  return (
    <View
      style={{
        alignItems: 'center',
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
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 60,
        }}
      >
        <Text
          style={{
            color: 'white',
            fontSize: 24,
            fontWeight: 'bold',
            textAlign: 'center',
          }}
        >
          Good guys!
        </Text>
      </View>

      {/* <Image
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPfO37MK81JIyR1ptwqr_vYO3w4VR-iC2wqQ&s',
        }}
        style={{
          height: 240,
          width: 240,
          marginTop: 20,
        }}
      /> */}
      <Image
        source={require('../assets/images/download.jpeg')}
        style={{
          height: 240,
          width: 240,
          marginTop: 20,
        }}
      />
    </View>
  );
};

export default Index;
