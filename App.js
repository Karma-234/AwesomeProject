import { StatusBar } from 'expo-status-bar';
import { Button, Modal, StyleSheet, Switch, Text, View, useWindowDimensions } from 'react-native';
import MenuList from './components/MenuList';
import Custom from './components/SectionList';
import CustomImage from './components/CustomImage';
import CustomButton from './components/CustomButton';
import CustomGap from './components/CustomGap';
import CustomTextInput from './components/CustomTextInput';
import { useState } from 'react';
import LoginPage from './pages/LoginPage';

export default function App() {
  const [isModalVisible, setShowModal] = useState(false);
  return (
    <View style={styles.container}>
      {/* <MenuList/> */}
      {/* <Custom/> */}
      {/* <CustomImage/> */}
      {/* <CustomGap height={50}/> */}
      {/* <CustomGap height={50}/>
      <CustomButton width={157} onPress={ ()=>setShowModal(true)}/>
      <CustomGap height={50}/>
      <CustomTextInput/>
      <StatusBar hidden={false} style="inverted" animated />
      <Modal transparent={true} visible={isModalVisible} onRequestClose={()=>setShowModal(false)} animationType='slide'>
        <View style={{flex:1, justifyContent:'center',alignItems:'center',margin:36}}>
        <View style={{height:300, width: useWindowDimensions().width/0.5, backgroundColor: 'white', justifyContent:'center',alignItems:'center'}}>
        <CustomGap height={50}/>
        <CustomButton width={157} onPress={ ()=>setShowModal(false)}/>
        </View>
        </View>
      </Modal> */}
      <LoginPage/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
