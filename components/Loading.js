import { View, Text } from 'react-native'
import React from 'react'
import * as Animatable from 'react-native-animatable'
import * as Progress from 'react-native-progress'

const Loading = () => {
  return (
    <Animatable.View
      className='h-full w-full bg-red-600/80 z-30 absolute'
      animation='fadeInUpBig'
      duration={1000}
    >
      <View className='flex-1 justify-center items-center'>
        <Text
          animation='slideInUp'
          iterationCount={1}
          className='text-3xl my-10 font-bold text-center text-white'
        >
          Cargando..
        </Text>
        <Progress.Circle
          size={60}
          indeterminate={true}
          color={'white'}
          borderWidth={4}
        />
      </View>
    </Animatable.View>
  )
}

export default Loading
