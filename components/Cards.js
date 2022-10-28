import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { MapIcon, MapPinIcon, UserIcon } from 'react-native-heroicons/solid'

const Cards = ({ img, description, sold, max, name, date }) => {
  return (
    <View className='-mt-5 '>
      <View className=''>
        <Image
          source={{
            uri: img
          }}
          className='w-full h-[500px] rounded-t-xl object-cover '
        />
      </View>
      <View className='bg-gray-100 shadow-lg rounded-b-xl'>
        <View className='flex-row items-center p-3  justify-between'>
          <TouchableOpacity className='flex-row items-center'>
            <UserIcon color={'green'} />
            <Text className='text-lg'>: {sold}</Text>
          </TouchableOpacity>
          <TouchableOpacity className='flex-row items-center'>
            <MapPinIcon color={'red'} />
            <Text className='text-lg'>Ver Mapa</Text>
          </TouchableOpacity>
        </View>
        <View className='px-2 py-3'>
          <Text>Fecha: {date}</Text>
          <Text className='text-lg font-extralight'>{description}</Text>
        </View>
      </View>
    </View>
  )
}

export default Cards
