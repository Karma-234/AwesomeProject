import { View, Text, Modal, StyleSheet } from 'react-native'
import React from 'react'
import CustomGap from './CustomGap';
import CustomButton from './CustomButton';

const AppModal = ({hidden, children, buttonText, onPress, title, message, customStyle }) => {
  return (
    <View>
      <Modal transparent={true} visible={hidden??false} animationType='slide'>
        {/* {children} */}
        <View style={{flex: 1, justifyContent:'center', backgroundColor: 'transparent', padding: 22,}}>
            <View style={customStyle ?? style.innerModal}>
                <Text style={style.header}>
                    {title ?? 'Hello World'}
                </Text>
                <CustomGap height={14}/>
                    {children ?? <Text style={style.message}>
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