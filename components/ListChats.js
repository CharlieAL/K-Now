import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Chats = () => {
  return (
    <View>
      <TouchableOpacity className=' flex-row mb-8'>
        <View className='  justify-center px-3'>
          <Image
            source={{
              uri: 'https://static.vinted.com/assets/no-photo/user-c5c77aad23636edb563b852ff3605caee437bc5d92a2e2e595c209c18b12cffe.png'
            }}
            className='w-16 h-16  bg-gray-300 rounded-full p-1 border-2 border-red-400'
          />
        </View>
        <View className='border-b-[0.5px] border-gray-400 w-80'>
          <Text className='text-lg'>Nombre del grupo</Text>
          <Text className='text-sm font-extralight w-1/2 h-10 text-gray-600 pt-3'>
            Lorem ipsum dolor...
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity className=' flex-row'>
        <View className='  justify-center px-3'>
          <Image
            source={{
              uri: 'https://static.vinted.com/assets/no-photo/user-c5c77aad23636edb563b852ff3605caee437bc5d92a2e2e595c209c18b12cffe.png'
            }}
            className='w-16 h-16  bg-gray-300 rounded-full p-1 border-2 border-red-400'
          />
        </View>
        <View className='border-b-[0.5px] border-gray-400 w-80'>
          <Text className='text-lg'>Nombre del grupo</Text>
          <Text className='text-sm font-extralight w-1/2 h-10 text-gray-600 pt-3'>
            Lorem ipsum dolor...
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default Chats
