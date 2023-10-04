import { View, Text, StyleSheet, BackHandler, Pressable, SafeAreaView, Alert, } from 'react-native'
import React , {useEffect, useState}from 'react'
import CustomGap from '../components/CustomGap';
import CustomButton from '../components/CustomButton';
import AppIcon from '../components/AppIcon';
import AppModal from '../components/AppModal';
import { StatusBar } from 'expo-status-bar';
import TaskCard from '../components/TaskCard';
import HomeAppBar from '../components/HomeAppBar';
import CustomTextInput from '../components/CustomTextInput';
import TaskList, { menuItemsToDisplay } from '../components/TaskList';
// import Snackbar from 'react-native-snackbar';

const HomePage = ({navigation}) => {
  const [isModalVisible, setShowModal]= useState(false);
  const [title, setTitle]= useState('');
  const [description, setDescription]= useState('');
  const [taskItem, setItems]=useState(menuItemsToDisplay);
  function showSnackBar(text) {
    
  }
  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", () => true);
  
    return () => BackHandler.removeEventListener("hardwareBackPress");
  }, [])
  
  return (
    <View style={style.container}>
      <HomeAppBar onLogout={()=>navigation.navigate('Login')}/>
      <CustomGap height={16}/>
      <View style={style.bodyContainer}>
      <SafeAreaView>
       <TaskList  itemsToDisplay={taskItem} onDelete={(e)=>{
        setItems(e);
       }} onDone={e=>{
        setItems([...e]);
       }}/>
      </SafeAreaView>
      </View>
     <View style={style.floatingButton}>
          <Pressable onPress={()=>setShowModal(true)}>
            <AppIcon name={'plus'} color={'white'} size={50}/>
          </Pressable>
      </View>
        <AppModal textColor={'white'}  hidden={isModalVisible} onPress={()=>{
          setShowModal(false);
          Alert.alert('Task added successfully!');
        }} title={'Add task'} customStyle={style.modal}>
          <CustomTextInput placeholder={'Title'} onChange={e=>{setTitle(e)}}/>
          <CustomGap height={8}/>
          <CustomTextInput placeholder={'Description'} onChange={e=>{setDescription(e)}}/>
        </AppModal>
        <StatusBar backgroundColor='white' style='light'/>
    </View>
  )
}
const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  bodyContainer: {
    paddingHorizontal: 12,
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

  },
  modal:{
    backgroundColor: '#150E28',
    alignItems:'stretch',
    flex:0.4
  },
});

export default HomePage;