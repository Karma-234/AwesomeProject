import { View, Text, StyleSheet, Modal } from 'react-native'
import React, { useEffect, useState } from 'react'
import CustomGap from '../components/CustomGap';
import CustomTextInput from '../components/CustomTextInput';
import CustomButton from '../components/CustomButton';

const LoginPage = () => {
  const [isModalVisible, setShowModal] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setError] = useState({});
  const validateForm = ()=>{
    let errors = {};
    if(!username) errors.username = 'Username cannot be empty!';
    if (username.match("[ !-\/:-@[-`{-~]")) errors.username = 'No spaces or sepcial characters in username!';
    if(!password) errors.password = 'Password cannot be empty!';
    setError(errors);
    return Object.keys(errors).length === 0;
  };
  const submitForm = ()=>{
    if (validateForm()) {
      setUsername("");
      setError({});
      setPassword("");
    }
  };
  useEffect(() => {
    console.clear();
  }, []);
  
  return (
    <View style={style.container}>
     <View style={style.formVontainer}>
     <Text style={style.whiteText}>
        Hi, Welcome{'\n'}<Text>To {'\n'}</Text>  
        <Text style={style.coloredText}>
          Task Manager
        </Text>
      </Text>
      <CustomGap height={24}/>
      <CustomTextInput onChange={e=>setUsername(e)}/>
      {errors.username && <Text style={style.errorText}>{errors.username}</Text>}
      <CustomGap height={12}/>
      <CustomTextInput placeholder={'Password'} secureText={true} maxLength={12} onChange={e=>setPassword(e)}/>
      {errors.password && <Text style={style.errorText}>{errors.password}</Text>}
      <CustomGap height={26}/>
      <CustomButton width={157} text={'Login'} onPress={()=>{
        setShowModal(true);
        // validateForm();
        submitForm();
        console.clear();
      }}/>
      <CustomGap height={11}/>
     </View>
    </View>
  )
}
const style = StyleSheet.create({
  container: {flex: 1, 
              flexDirection: 'column', 
              backgroundColor: '#150E28', 
              justifyContent: 'center',
              padding: 11,
              },
              formVontainer: {
                // flex: 1, 
              flexDirection: 'column', 
              backgroundColor: '#150E28', 
              justifyContent: 'center',
              // alignItems:'center',
              padding: 11,
              paddingBottom:11,
              borderRadius: 8,
              borderColor: "#903AFF",
              borderWidth: 2,
              elevation: 10,
              shadowColor: "#fff",
              shadowRadius: 10,
              },
  whiteText:{
    color: 'white',
    fontSize: 32,
    textAlign: 'center',
  },
  coloredText:{
    color:'#903AFF',
    fontSize: 38,
  },
  modalView:{
    flex:0.3,
    color: 'white',
    // color:'transparent',
    height: 100,
    alignContent: 'flex-start',
    justifyContent: 'flex-end',
    position:'absolute',
    bottom: 50,
    alignItems : 'center',
  },
  subView:{
    height:300,
    color: 'white',
  },
  errorText: {
    color: 'red',
    textAlign: 'left',
    fontSize: 10,
    fontWeight: 'bold'
  }
});
export default LoginPage;