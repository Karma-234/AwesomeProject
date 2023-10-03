import { View, Text, StyleSheet, useWindowDimensions } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import CustomGap from './CustomGap';
import AppButton from './AppButton';

const TaskCard = () => {
  return (
    <View>
      <LinearGradient style={style.gradient} colors={['#903AFF','#D434FE','#FF26B9','#FE34B9']} locations={[0.0, 0.5642, 0.999, 1.0]}>
        <View style={style.innerContainer}>
            <View style={style.header}>
                <Text style={style.title}>This is Title</Text>
                <Text style={style.title}>icon</Text>
            </View>
            <CustomGap height={6}/>
            <View style={style.body}>
                <View style={{flex: 1}}>
                <Text style={style.description}>This is Bodydhbhjsbjhbjsjsbsjbjhjshsjjvjvhvjvjvjvjvjvj</Text>
                </View>
                <CustomGap width={6} height={6}/>
                <View style={[style.body]}>
                    <AppButton width={80} height={55} text='Done' color={'green'}/>
                    <CustomGap width={6} height={6}/>
                    <AppButton width={80} height={55} text='Delete'/>
                </View>
            </View>
        </View>
      </LinearGradient>
    </View>
  );
}
const style = StyleSheet.create({
    gradient: {
        borderRadius: '6px',
        padding: 2,
    },
    innerContainer: {
        borderRadius: '6px',
        backgroundColor: '#150E28',
        padding: 6,
        // flex: 1,
    },
    title: {
        fontSize: 22,
        fontWeight: '700',
        textAlign: 'left',
        color: 'white',
    },
    header: {
        flex: 0,
        flexDirection: 'row',
        justifyContent:'space-between'

    },
    body: {
        flex: 0,
        flexDirection: 'row',
        justifyContent:'space-between'

    },
    description: {
        fontSize: 14,
        fontWeight: '500',
        textAlign: 'left',
        color: 'white',
    }
});
export default TaskCard;