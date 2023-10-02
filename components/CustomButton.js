import { View, Text, StyleSheet, Pressable } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'

const CustomButton = ({text, onPress, width, height}) => {
  return (
    <View style={style.container}>
        <Pressable onPress={()=> onPress===undefined ? console.log('Button Pressed') : onPress()}>
            <LinearGradient  style={[style.gradient,{width: width, height: height ?? 54}]} colors={['#903AFF','#D434FE','#FF26B9','#FE34B9']} locations={[0.0, 0.5642, 0.999, 1.0]}>
                <Text style={style.buttontext}>{ text ?? 'Button'}</Text>
            </LinearGradient>
        </Pressable>
    </View>
  )
}
const style = StyleSheet.create({
    container: {
        borderRadius: '6px',
        alignItems: 'center',
        height: 40,
    },
    gradient: {
        borderRadius: '6px',
        height: 40,
        width: 150,
        justifyContent: 'center',
        alignItems: 'center',
        // textAlign: 'center',
    },
    buttontext:{
        padding: 15,
        // alignSelf: 'center',
        color: 'white',
        // textAlign: 'center',
        
        
    }
});

export default CustomButton;