import { View, Text, TextInput, KeyboardAvoidingView, ScrollView } from 'react-native'
import React from 'react'

const CustomTextInput = ({secureText, placeholder, keyboardType, maxLength, inputMode, onChange, value=''}) => {
  return (
    <View style={{height: 70}}>
      <KeyboardAvoidingView>
            <TextInput defaultValue={value}  placeholderTextColor={'#fff'} keyboardType={keyboardType} placeholder={placeholder ??'Username'}  secureTextEntry={secureText ?? false} maxLength={maxLength} inputMode={inputMode ?? 'text'} style={{ borderColor: '#fff', borderWidth: 1 , color: '#fff', padding: 20}}  onChangeText={e=>onChange(e)}/>
      </KeyboardAvoidingView>
    </View>
  )
}

export default CustomTextInput;