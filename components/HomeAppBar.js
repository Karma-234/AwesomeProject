import { View, Text, StyleSheet, SafeAreaView, Pressable } from 'react-native'
import React from 'react'
import AppIcon from './AppIcon';
import CustomGap from './CustomGap';

const HomeAppBar = ({name = 'Felix', onLogout=()=>{}}) => {
  return (
    <View style={style.container}>
      <SafeAreaView>
        <View style={{flexDirection: 'row', justifyContent:'space-between',flexWrap:'wrap', paddingHorizontal: 22}}>
          <View style={{flexDirection: 'row', justifyContent:'center',flexWrap:'wrap'}}>
            <Text style={style.whiteText}>hi,{' '} 
            <Text style={style.coloredText}>{name}</Text>
            </Text>
            <CustomGap width={12}/>
            <AppIcon name={'sticky-note-o'} color={'white'}/>
          </View>
          <View style={{alignContent:'flex-end'}}>
              <Pressable onPress={()=>onLogout()}>
                <AppIcon name={'hourglass'} color={'red'} size={30}/>
              </Pressable>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}
const style = StyleSheet.create({
  container:{
    backgroundColor: '#150E28',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    paddingBottom: 16,

  },
  whiteText:{
    color: 'white',
    fontSize: 26,
    textAlign: 'center',
  },
  coloredText:{
    color:'#903AFF',
    fontSize: 26,
  },

});

export default HomeAppBar;