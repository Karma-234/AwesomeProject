import { View, Text, StyleSheet, BackHandler, Pressable, SafeAreaView, } from 'react-native'
import React , {useEffect, useState}from 'react'
import CustomGap from '../components/CustomGap';
import CustomButton from '../components/CustomButton';
import AppIcon from '../components/AppIcon';
import AppModal from '../components/AppModal';
import { StatusBar } from 'expo-status-bar';
import TaskCard from '../components/TaskCard';
import HomeAppBar from '../components/HomeAppBar';

const HomePage = ({navigation}) => {
  const [isModalVisible, setShowModal]= useState(false);
  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", () => true);
  
    return () => BackHandler.removeEventListener("hardwareBackPress");
  }, [])
  
  return (
    <View style={style.container}>
      <HomeAppBar/>
     <SafeAreaView>
      <CustomGap height={25}/>
      <TaskCard/>
      <CustomGap height={25}/>
      <CustomButton width={200} text={'Go back'} onPress={()=>navigation.navigate('Login')}/>
     </SafeAreaView>
     <View style={style.floatingButton}>
          <Pressable onPress={()=>setShowModal(true)}>
            <AppIcon name={'plus'} color={'white'} size={50}/>
          </Pressable>
      </View>
        <AppModal hidden={isModalVisible} onPress={()=>setShowModal(false)} title={'Add task'}/>
        <StatusBar backgroundColor='#150E28'/>
    </View>
  )
}
const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  floatingButton: {
    padding: 8,
    height: 70,
    width: 70,
    position: 'absolute',
    right: 10,
    bottom: 30,
    borderRadius: 100,
    backgroundColor: '#150E28',
    justifyContent: 'center',
    alignItems: 'center',

  }
});

export default HomePage;