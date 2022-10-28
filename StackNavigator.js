import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from './screens/LoginScreen'
import HomeScreen from './screens/HomeScreen'
import ChatScreen from './screens/ListChatScreen'

const Stack = createNativeStackNavigator()

const StackNavigator = () => {
  const [user, setUser] = useState('carlos')
  return (
    <Stack.Navigator>
      {!user ? (
        <Stack.Screen
          name='Login'
          component={LoginScreen}
          options={{
            headerShown: false
          }}
        />
      ) : (
        <>
          <Stack.Screen
            name='Home'
            component={HomeScreen}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name='Chat'
            component={ChatScreen}
            options={{
              headerShown: false
            }}
          />
        </>
      )}
    </Stack.Navigator>
  )
}

export default StackNavigator
