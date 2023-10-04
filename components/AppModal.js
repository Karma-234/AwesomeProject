import { View, Text, Modal, StyleSheet } from 'react-native'
import React from 'react'
import CustomGap from './CustomGap';
import CustomButton from './CustomButton';

const AppModal = ({hidden=false, children, buttonText, onPress=()=>{}, title, message, customStyle={}, textColor }) => {
  return (
    <View>
      <Modal transparent={true} visible={hidden} animationType='slide'>
        {/* {children} */}
        <View style={{flex: 1, justifyContent:'center', backgroundColor: 'rgba(52,52,52,0.8)', padding: 22,}}>
            <View style={[style.innerModal, customStyle]}>
                <Text style={[style.header,{color:textColor} ]}>
                    {title ?? 'Hello World'}
                </Text>
                <CustomGap height={14}/>
                    {children ?? <Text style={[style.message, {color: textColor}]}>
                    {message ?? 'Hello World'}
                                    </Text>}
                <CustomGap height={14}/>
                <CustomButton width={150} text={buttonText??'Continue'} onPress={()=> onPress()}/>
            </View>
        </View>
      </Modal>
    </View>
  )
}
const style = StyleSheet.create({
    innerModal: {flex: 0.2,
                backgroundColor:'white', 
                borderRadius: 16, padding: 16,
                justifyContent: 'center',
                alignItems:'center'
            },
    header: {
        fontSize: 26,
        fontWeight:'700',
        color: 'black',
        textAlign:'center'
    },
    message: {
        fontSize: 16,
        fontWeight:'500',
        color: 'black',
        textAlign:'center'
    },
    
});

export default AppModal;