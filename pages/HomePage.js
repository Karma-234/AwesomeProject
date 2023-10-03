import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import CustomGap from '../components/CustomGap';
import CustomButton from '../components/CustomButton';

const HomePage = ({navigation}) => {
  return (
    <View style={style.container}>
      <Text>HomePage</Text>
      <CustomGap height={25}/>
      <CustomButton text={'Go back'} onPress={()=>navigation.goBack()}/>
    </View>
  )
}
const style = StyleSheet.create({
  container: {
    justifyContent: 'center',
    // alignItems: 'center',
    flex: 1,
  }
});

export default HomePage;