import { View, Text } from 'react-native'
import React from 'react'

const code = () => {
  return (
    <>
      <View className='py-5 px-2'>
        <View className='flex-row items-center justify-center space-x-24'>
          <View>
            <TouchableOpacity>
              <Image
                source={{
                  uri: 'https://static.vinted.com/assets/no-photo/user-c5c77aad23636edb563b852ff3605caee437bc5d92a2e2e595c209c18b12cffe.png'
                }}
                className='w-9 h-9 bg-gray-300 rounded-full p-1 border-2 border-red-400'
              />
            </TouchableOpacity>
          </View>
          <View className=''>
            {/* Ubicacion poner opciones  */}
            <TouchableOpacity className='flex-row space-x-1 items-center'>
              <MapPinIcon size={22} color={'red'} />
              <Text className='text-lg font-light text-center'>Ubicacion</Text>
              <ChevronDownIcon size={15} color={'black'} />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Chat')
              }}
            >
              <ChatBubbleOvalLeftEllipsisIcon color={'red'} size={28} />
            </TouchableOpacity>
          </View>
        </View>
        {/* card flayers */}
        <View className=' bg-red-400'>
          <Cards />
        </View>
      </View>

      <View className='mt-5'>{/* <Navbar /> */}</View>
    </>
  )
}

export default code
