import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import {
  ChatBubbleOvalLeftEllipsisIcon,
  HeartIcon,
  MapPinIcon,
  PlusCircleIcon,
  PlusIcon,
  StarIcon,
  UserPlusIcon
} from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native'

const Navbar = ({ user }) => {
  const navigation = useNavigation()
  return (
    <View className='absolute bottom-0 h-20 bg-black w-full border-t-gray-800 border'>
      <View className='flex-row items-center justify-between px-5 my-2 '>
        <TouchableOpacity className=''>
          <Image
            source={{
              uri:
                user.picture ||
                'https://static.vinted.com/assets/no-photo/user-c5c77aad23636edb563b852ff3605caee437bc5d92a2e2e595c209c18b12cffe.png'
            }}
            className='w-10 h-10 bg-gray-300 rounded-full border-2 border-red-500'
          />
        </TouchableOpacity>
        <TouchableOpacity className='flex-row space-x-1 items-center '>
          <MapPinIcon size={30} color={'red'} />
        </TouchableOpacity>

        <TouchableOpacity className='flex-row space-x-1 items-center bg-white border-[#f00] border-2 px-2 py-1  rounded-lg justify-center'>
          {/* <Text className='text-3xl font-extrabold text-center text-[#f00]'>
          +
        </Text> */}
          <PlusIcon size={20} color={'#f00'} />
        </TouchableOpacity>

        <TouchableOpacity className='flex-row space-x-1 items-center'>
          <UserPlusIcon size={30} color={'red'} />
        </TouchableOpacity>

        <TouchableOpacity
          className=''
          onPress={() => {
            navigation.navigate('Chat')
          }}
        >
          <ChatBubbleOvalLeftEllipsisIcon color={'red'} size={36} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Navbar
