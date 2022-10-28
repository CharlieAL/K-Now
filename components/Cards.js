import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { MapIcon, MapPinIcon, UserIcon } from 'react-native-heroicons/solid'

const Cards = () => {
  return (
    <View className='pt-5'>
      <View className=''>
        <Image
          source={{
            uri: 'https://static.vinted.com/assets/no-photo/user-c5c77aad23636edb563b852ff3605caee437bc5d92a2e2e595c209c18b12cffe.png'
          }}
          className='w-full h-[450] rounded-t-xl object-cover '
        />
      </View>
      {/* Poner texto en la imagen */}
      {/* <View>
        <View className='absolute -top-10  p-2'>
          <Text className='text-white'>
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          </Text>
        </View>
      </View> */}
      {/* poner texto bajo la imagen */}
      <View className='bg-gray-100 shadow-lg rounded-b-xl'>
        <View className='flex-row items-center p-3 space-x-52 justify-center'>
          <TouchableOpacity className='flex-row items-center'>
            <UserIcon color={'green'} />
            <Text className='text-lg'>: 2</Text>
          </TouchableOpacity>
          <TouchableOpacity className='flex-row items-center'>
            <MapPinIcon color={'red'} />
            <Text className='text-lg'>Ver Mapa</Text>
          </TouchableOpacity>
        </View>
        <View className='p-5'>
          <Text>Mañana a las 8 PM</Text>
          <Text className='text-lg font-extralight'>
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          </Text>
        </View>
      </View>
    </View>
  )
}

export default Cards
