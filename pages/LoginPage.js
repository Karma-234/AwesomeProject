import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react'
import CustomGap from '../components/CustomGap';
import CustomTextInput from '../components/CustomTextInput';
import CustomButton from '../components/CustomButton';
import AppModal from '../components/AppModal';
import  supabase  from '../supabase';


const LoginPage = ({navigation}) => {
  const [isModalVisible, setShowModal] = useState(false);
  const [username, setUsername] = useState("");
  const [id, setID] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [errors, setError] = useState({});
  useEffect(() => {
    // console.log(supabase.from('User').insert({id: '',email:`${username}@task.com`,created_at:new Date()}));
  
    return () => {
      
    }
  }, []);
  
  function login() {
    setLoading(true);
    supabase.auth.signInWithPassword({email: `${username}@task.com`, password: password})
    .then(e=>{
      console.log(e.data.user.id);
    })
    .catch(e=>{console.log(e.message)})
    .finally(()=>{
      setLoading(false);
    });
  }
  const validateForm = ()=>{
    let errors = {};
    if(!username) errors.username = 'Username cannot be empty!';
    if (username.match("[ !-\/:-@[-`{-~]")) errors.username = 'No spaces or sepcial characters in username!';
    if(!password) errors.password = 'Password cannot be empty!';
    if(password.length < 6) errors.password = 'Password must not be less than 6 characters!';
    setError(errors);
    return Object.keys(errors).length === 0;
  };
  const submitForm = ()=>{
    if (validateForm()) {
      //Make Api call
      login();
      // setShowModal(true);
    }
  };
  return (
    <View style={style.container}>
     <View style={style.formVontainer}>
     <Text style={style.whiteText}>
        Welcome{'\n'}<Text style={{fontSize: 16}}>To {'\n'}</Text>  
        <Text style={style.coloredText}>
          Task Manager
        </Text>
      </Text>
      <CustomGap height={24}/>
      <CustomTextInput value={username} onChange={e=>{
        // e.preventDefault();
        setUsername(e);
      }}/>
      {errors.username && <Text style={style.errorText}>{errors.username}</Text>}
      <CustomGap height={12}/>
      <CustomTextInput value={password} placeholder={'Password'} secureText={true} maxLength={12} onChange={e=>setPassword(e)}/>
      {errors.password && <Text style={style.errorText}>{errors.password}</Text>}
      <CustomGap height={26}/>
      {isLoading===false ? <CustomButton width={157} text={'Login'} onPress={()=>{
        submitForm();
      }}/> : <ActivityIndicator color={'#903AFF'} size={'large'}/>}
      <CustomGap height={11}/>
     </View>
     <AppModal hidden={isModalVisible} onPress={()=>{
      navigation.navigate('Home',{username, id });
      setUsername("");
      setError({});
      setPassword("");
      setShowModal(false);
     }}/>
    </View>
  )
}
const style = StyleSheet.create({
  container: {flex: 1, 
              flexDirection: 'column', 
              backgroundColor: '#903AFF', 
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
    fontSize: 18,
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