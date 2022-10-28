import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Button
} from 'react-native'
import React, { useEffect, useState } from 'react'
import {
  ChevronDownIcon,
  MapPinIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  XCircleIcon,
  XMarkIcon,
  UserIcon
} from 'react-native-heroicons/solid'
import Cards from '../components/Cards'
import Navbar from '../components/Navbar'
import { useNavigation } from '@react-navigation/native'
import Swiper from 'react-native-deck-swiper'

const HomeScreen = () => {
  const navigation = useNavigation()

  return (
    <SafeAreaView>
      <View></View>
    </SafeAreaView>
  )
}

export default HomeScreen
