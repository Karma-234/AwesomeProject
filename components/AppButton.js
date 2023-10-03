import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

const AppButton = ({height, width,text='Continue', onPress, color, textColor }) => {
  return (
    <Pressable onPress={()=> onPress===undefined ? console.log('Button Pressed') : onPress()}>
        <View style={[style.container, {width:width ?? 150, height:height?? 50, backgroundColor: color ??'red'}]}>
            <Text style={{color: textColor ?? 'white'}}>{text}</Text>
        </View>
    </Pressable>
  );
}

const style = StyleSheet.create({
    container: {
        height: 50,
        width: 150,
        borderRadius: 6,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default AppButton;