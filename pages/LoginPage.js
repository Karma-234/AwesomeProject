import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import CustomGap from '../components/CustomGap';
import CustomTextInput from '../components/CustomTextInput';
import CustomButton from '../components/CustomButton';

const LoginPage = () => {
  useEffect(() => {
    

  }, []);
  
  return (
    <View style={style.container}>
      <Text style={style.whiteText}>
        Hi, Welcome{'\n'}<Text>To {'\n'}</Text>  
        <Text style={style.coloredText}>
          Task Manager
        </Text>
      </Text>
      <CustomGap height={24}/>
      <CustomTextInput />
      <CustomGap height={12}/>
      <CustomTextInput placeholder={'Password'} secureText={true}/>
      <CustomGap height={26}/>
      <CustomButton width={157} text={'Login'}/>
    </View>
  )
}
const style = StyleSheet.create({
  container: {flex: 1, 
              flexDirection: 'column', 
              backgroundColor: '#150E28', 
              justifyContent: 'center',
              // alignItems:'center',
              padding: 12
              },
  whiteText:{
    color: 'white',
    fontSize: 32,
    textAlign: 'center',
  },
  coloredText:{
    color:'#903AFF',
    fontSize: 38,
  }
});
export default LoginPage;