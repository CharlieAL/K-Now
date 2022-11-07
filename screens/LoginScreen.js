import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import { CheckIcon } from 'react-native-heroicons/solid'

import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import useAuth from '../hooks/useAuth'
import Loading from '../components/Loading'

const LoginScreen = () => {
  const [loadin, setLoading] = useState(false)
  const [trueTerm, setTrueTerm] = useState(false)
  const navigation = useNavigation()
  const { promptAsync, getUser } = useAuth()
  const permision = () => {
    navigation.navigate('Home')
  }

  const handleLogin = async () => {
    if (trueTerm) {
      setLoading(true)
      // await promptAsync()
      getUser({
        name: 'Jorge',
        email: 'caca@gmail.com',
        picture:
          'https://frases.top/wp-content/uploads/2021/08/las-mejores-fotos-de-perfil-para-whatsapp.jpg'
      })
      setTimeout(() => {
        setLoading(false)
      }, 2000)
    } else {
      alert('You must accept the terms and conditions')
    }
  }
  return (
    <>
      {loadin && <Loading />}
      <View className='flex-1 items-center justify-center space-y-3 bg-gray-900'>
        <View className=' space-y-3 -mt-32 mb-10'>
          <Text className='text-center text-xl font-bold text-white'>
            Bienvenid@
          </Text>
          <Text className=' text-center text-4xl font-bold text-[#f00]'>
            K-<Text className='text-white'>NOW</Text>
          </Text>
          <Text className='text-center text-xl  text-gray-400'>
            Inicia sesión para continuar
          </Text>
        </View>

        <View>
          <TouchableOpacity
            onPress={() => handleLogin()}
            className='bg-[#f00] py-2 w-56 rounded-lg'
          >
            <Text className='text-white font-bold text-lg text-center'>
              Google
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            onPress={permision}
            className='bg-[#3065f9] py-2 w-56 rounded-lg'
          >
            <Text className='text-white font-bold text-lg text-center'>
              Facebook
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
            className='bg-[#2c2] py-2 w-56 rounded-lg'
          >
            <Text className='text-white font-bold text-lg text-center'>
              Cree Una Cuenta
            </Text>
          </TouchableOpacity>
        </View>
        <View className='flex-row justify-center items-center space-x-2'>
          <Text className='text-center text-lg font-extralight text-white'>
            acepto los terminos y condiciones
          </Text>
          <TouchableOpacity
            onPress={() => setTrueTerm(!trueTerm)}
            className={
              trueTerm
                ? `bg-[#0f0] w-5 h-5 rounded-lg  `
                : `bg-gray-300 w-5 h-5 rounded-lg `
            }
          ></TouchableOpacity>
        </View>
      </View>
    </>
  )
}

export default LoginScreen
