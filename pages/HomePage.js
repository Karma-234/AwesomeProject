import { View, Text, StyleSheet, BackHandler, } from 'react-native'
import React , {useEffect}from 'react'
import CustomGap from '../components/CustomGap';
import CustomButton from '../components/CustomButton';

const HomePage = ({navigation}) => {
  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", () => true);
  
    return () => BackHandler.removeEventListener("hardwareBackPress");
  }, [])
  
  return (
    <View style={style.container}>
      <Text>HomePage</Text>
      <CustomGap height={25}/>
      <CustomButton width={200} text={'Go back'} onPress={()=>navigation.goBack()}/>
      <View style={style.floatingButton}>
        <Text style={{color:'white'}}>Floating icon</Text>
      </View>
    </View>
  )
}
const style = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    // position: 'absolute',
    flex: 1,
  },
  floatingButton: {
    padding: 8,
    height: 100,
    width: 100,
    position: 'absolute',
    right: 10,
    bottom: 30,
    borderRadius: 100,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',

  }
});

export default HomePage;