import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import {
  HeartIcon,
  PlusCircleIcon,
  PlusIcon,
  StarIcon
} from 'react-native-heroicons/solid'

const Navbar = () => {
  return (
    <View className='bg-white h-full mt-10'>
      <View className='flex-row justify-center items-center pt-4 space-x-10'>
        {/* <TouchableOpacity className=''>
          <HeartIcon color={'red'} size={45} />
        </TouchableOpacity> */}
        <TouchableOpacity className=''>
          <PlusCircleIcon color={'red'} size={60} />
        </TouchableOpacity>
        {/* <TouchableOpacity className=''>
          <StarIcon color={'red'} size={45} />
        </TouchableOpacity> */}
      </View>
    </View>
  )
}

export default Navbar
