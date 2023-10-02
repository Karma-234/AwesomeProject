import { View, Text, TextInput, KeyboardAvoidingView, ScrollView } from 'react-native'
import React from 'react'

const CustomTextInput = () => {
  return (
    <View>
      <KeyboardAvoidingView>
        <ScrollView keyboardDismissMode='on-drag'>
            <TextInput keyboardType='decimal-pad' placeholder='Pin' numberOfLines={5} passwordRules={''} maxLength={1}  />
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  )
}

export default CustomTextInput