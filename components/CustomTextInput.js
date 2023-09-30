import { View, Text, TextInput, KeyboardAvoidingView, ScrollView } from 'react-native'
import React from 'react'

const CustomTextInput = () => {
  return (
    <View>
      <KeyboardAvoidingView>
        <ScrollView keyboardDismissMode='on-drag'>
            <TextInput keyboardType='number-pad' placeholder='Pin' numberOfLines={5} passwordRules={''} />
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  )
}

export default CustomTextInput