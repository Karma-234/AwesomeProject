import { View, Text, ImageBackground, useColorScheme, useWindowDimensions } from 'react-native';
import React from 'react';
import logo from '../assets/adaptive-icon.png';
// const logo = require('../assets/favicon.png');

const CustomImage = () => {
    const appScheme = useColorScheme();
    const dimHook = useWindowDimensions();
  return (
    <View style={[{flex:1}, appScheme === 'dark'? {backgroundColor:'grey'} : {backgroundColor:'pink'}]}>
      <ImageBackground style={{flex: 1, alignItems:'center'}} source={logo}>
        <Text style={{position: 'absolute', top: dimHook.height >1000? '50%':'30%'}}>Hello World</Text>
      </ImageBackground>
    </View>
  );
}

export default CustomImage;