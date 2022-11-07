import { View, Text } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View className='h-20 bg-black flex justify-end border-b-gray-800 border'>
      <View className='flex-row py-1 px-4'>
        <Text className='text-xl font-bold text-[#f00]'>K-</Text>
        <Text className='text-white text-xl font-bold'>NOW</Text>
      </View>
    </View>
  )
}

export default Header
