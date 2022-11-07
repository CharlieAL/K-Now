import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { ArrowLeftCircleIcon, UserPlusIcon } from 'react-native-heroicons/solid'
import Chats from '../components/ListChats'

const ChatScreen = () => {
  const navigate = useNavigation()
  return (
    <SafeAreaView>
      <View className='py-5'>
        <View className='flex-row items-center justify-center relative'>
          <View className='absolute left-4'>
            <TouchableOpacity onPress={() => navigate.goBack()}>
              <ArrowLeftCircleIcon color={'red'} size={40} />
            </TouchableOpacity>
          </View>
          <View className=''>
            <Text className='font-light text-lg'>Grupos</Text>
          </View>
          <View className='absolute right-4'>
            <TouchableOpacity>
              <UserPlusIcon color={'red'} size={35} />
            </TouchableOpacity>
          </View>
        </View>
        <View className='pt-8'>
          <Chats />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default ChatScreen
