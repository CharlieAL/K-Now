import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import { CheckIcon } from 'react-native-heroicons/solid'

import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'

const LoginScreen = () => {
  const [trueTerm, setTrueTerm] = useState(false)
  const navigation = useNavigation()

  const permision = () => {
    trueTerm
      ? navigation.navigate('Home')
      : alert('You must accept the terms and conditions')
  }
  return (
    <View className='flex-1 items-center justify-center space-y-3'>
      <View className='absolute top-52 space-y-3'>
        <Text className='text-center text-xl font-extralight'>Bienbenid@</Text>
        <Text className=' text-center text-3xl font-bold text-red-500'>
          K-<Text className='text-gray-800'>NOW</Text>
        </Text>
        <Text className='text-center text-xl font-extralight '>
          Inicia sesión para continuar
        </Text>
      </View>

      <View>
        <TouchableOpacity
          onPress={permision}
          className='bg-red-500 py-2 w-56 rounded-lg'
        >
          <Text className='text-white font-bold text-lg text-center'>
            Google
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          onPress={permision}
          className='bg-blue-500 py-2 w-56 rounded-lg'
        >
          <Text className='text-white font-bold text-lg text-center'>
            Faceboock
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          onPress={permision}
          className='bg-[#00acee] py-2 w-56 rounded-lg'
        >
          <Text className='text-white font-bold text-lg text-center'>
            Twitter
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          onPress={permision}
          className='bg-green-500 py-2 w-56 rounded-lg'
        >
          <Text className='text-white font-bold text-lg text-center'>
            Cree Una Cuenta
          </Text>
        </TouchableOpacity>
      </View>
      <View className='flex-row justify-center items-center space-x-2'>
        <Text className='text-center text-lg font-extralight'>
          acepto los terminos y condiciones
        </Text>
        <TouchableOpacity
          onPress={() => setTrueTerm(!trueTerm)}
          className={
            trueTerm
              ? `bg-green-600 w-5 h-5 rounded-lg  `
              : `bg-gray-300 w-5 h-5 rounded-lg `
          }
        >
          {trueTerm ? <CheckIcon size={19} color={'white'} /> : null}
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default LoginScreen
