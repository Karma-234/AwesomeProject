import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const HomeAppBar = () => {
  return (
    <View>
      <Text>HomeAppBar</Text>
    </View>
  );
}
const style = StyleSheet.create({whiteText:{
    color: 'white',
    fontSize: 32,
    textAlign: 'center',
  },
  coloredText:{
    color:'#903AFF',
    fontSize: 38,
  },});

export default HomeAppBar;