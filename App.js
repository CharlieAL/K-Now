import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { AuthProvider } from './hooks/useAuth'
import StackNavigator from './StackNavigator'
export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style='light' />
      <AuthProvider>
        <StackNavigator />
      </AuthProvider>
    </NavigationContainer>
  )
}
