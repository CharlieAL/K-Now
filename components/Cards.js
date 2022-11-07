import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { MapIcon, UserIcon } from 'react-native-heroicons/solid'

const Cards = ({
  img,
  description,
  sold,
  max,
  name,
  date,
  nameOfEvent,
  hour
}) => {
  return (
    <View className='py-3 '>
      {/* <View className='absolute top-0 bg-black'></View> */}
      <View className='flex-row justify-between py-3 px-2 border border-b-gray-800'>
        <Text className='text-white text-sm font-semibold'>{nameOfEvent}</Text>
        <Text className='text-white text-sm font-semibold'>
          {date} a las {hour}
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          console.log('click')
        }}
        className='bg-black'
      >
        <Image
          style={styles.image}
          source={{
            uri: img
          }}
          resizeMode='stretch'
        />
      </TouchableOpacity>

      <View className='bg-black shadow-lg h-32 px-1 pt-2'>
        <View className='flex-row items-center px-2 justify-between'>
          <TouchableOpacity className='px-2 py-1 rounded-lg flex-row items-center space-x-1 border border-gray-700'>
            <UserIcon size={25} color={'green'} />
            <Text className='text-white'>{sold} -</Text>
            <Text className='text-white'>{max}</Text>
          </TouchableOpacity>
          <TouchableOpacity className='px-2 py-1 rounded-lg flex-row items-center space-x-1 border border-gray-700'>
            <MapIcon size={25} color={'red'} />
            <Text className='text-white'>Ver Mapa</Text>
          </TouchableOpacity>
        </View>
        <Text className='text-base font-light text-white '>{description} </Text>
      </View>
    </View>
  )
}

export default Cards

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 450,
    backgroundColor: 'black'
  }
})
