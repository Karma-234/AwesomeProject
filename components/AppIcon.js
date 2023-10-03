import { View, Text } from 'react-native'
import React from 'react'
import  Icon  from 'react-native-vector-icons/FontAwesome'

const AppIcon = ({name, color, size}) => {
  return (
    <View>
      <Icon name={name??'check-circle'} size={size??24} color={color??'green'}></Icon>
    </View>
  )
}

export default AppIcon;