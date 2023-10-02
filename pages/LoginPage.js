import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const LoginPage = () => {
  return (
    <View>
      <Text>LoginPage</Text>
    </View>
  )
}
const style = StyleSheet.create({
  container: {flex: 1, 
              flexDirection: 'column', 
              backgroundColor: '#150E28', 
              justifyContent: 'center',
              alignItems:'center',
              },
});
export default LoginPage;