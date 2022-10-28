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

const DUMMY_DATA = [
  {
    id: 1,
    name: 'Roberto Perez',
    image:
      'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/hip-hop-rap-music-event-flyer-template-design-3b828da63aad5f3e4b3388af9d6c9b9c_screen.jpg?ts=1636985494',
    ticketsMax: 100,
    ticketsSold: 50,
    descripction:
      ' Batallas de Rap en vivo en el centro de la ciudad de Mexico mejor evento de rap en vivo',
    date: '2022-11-11'
  },
  {
    id: 2,
    name: 'Charlie Martinez',
    image:
      'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/techno-party-flyer-template-design-98b3f955ea7ac8622799eee7f6bb5adc_screen.jpg?ts=1636993025',
    ticketsMax: 100,
    ticketsSold: 45,
    descripction:
      'La mejor tecno banda en vivo aparten lugar rapido porque se agotan los boletos',
    date: '2022-11-20'
  },
  {
    id: 1,
    name: 'Roberto Perez',
    image:
      'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/hip-hop-rap-music-event-flyer-template-design-3b828da63aad5f3e4b3388af9d6c9b9c_screen.jpg?ts=1636985494',
    ticketsMax: 100,
    ticketsSold: 50,
    descripction:
      ' Batallas de Rap en vivo en el centro de la ciudad de Mexico mejor evento de rap en vivo',
    date: '2022-11-11'
  },
  {
    id: 2,
    name: 'Charlie Martinez',
    image:
      'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/techno-party-flyer-template-design-98b3f955ea7ac8622799eee7f6bb5adc_screen.jpg?ts=1636993025',
    ticketsMax: 100,
    ticketsSold: 45,
    descripction:
      'La mejor tecno banda en vivo aparten lugar rapido porque se agotan los boletos',
    date: '2022-11-20'
  },
  {
    id: 1,
    name: 'Roberto Perez',
    image:
      'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/hip-hop-rap-music-event-flyer-template-design-3b828da63aad5f3e4b3388af9d6c9b9c_screen.jpg?ts=1636985494',
    ticketsMax: 100,
    ticketsSold: 50,
    descripction:
      ' Batallas de Rap en vivo en el centro de la ciudad de Mexico mejor evento de rap en vivo',
    date: '2022-11-11'
  },
  {
    id: 2,
    name: 'Charlie Martinez',
    image:
      'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/techno-party-flyer-template-design-98b3f955ea7ac8622799eee7f6bb5adc_screen.jpg?ts=1636993025',
    ticketsMax: 100,
    ticketsSold: 45,
    descripction:
      'La mejor tecno banda en vivo aparten lugar rapido porque se agotan los boletos',
    date: '2022-11-20'
  },
  {
    id: 1,
    name: 'Roberto Perez',
    image:
      'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/hip-hop-rap-music-event-flyer-template-design-3b828da63aad5f3e4b3388af9d6c9b9c_screen.jpg?ts=1636985494',
    ticketsMax: 100,
    ticketsSold: 50,
    descripction:
      ' Batallas de Rap en vivo en el centro de la ciudad de Mexico mejor evento de rap en vivo',
    date: '2022-11-11'
  }
]

const HomeScreen = () => {
  const navigation = useNavigation()

  return (
    <SafeAreaView className='flex-1'>
      {/* Header */}
      <View className='flex-row items-center justify-between px-5 mt-5'>
        <TouchableOpacity className=''>
          <Image
            source={{
              uri: 'https://static.vinted.com/assets/no-photo/user-c5c77aad23636edb563b852ff3605caee437bc5d92a2e2e595c209c18b12cffe.png'
            }}
            className='w-10 h-10 bg-gray-300 rounded-full p-1 border-2 border-red-400'
          />
        </TouchableOpacity>
        <TouchableOpacity className='flex-row space-x-1 items-center '>
          <MapPinIcon size={22} color={'red'} />
          <Text className='text-lg font-light text-center'>Ubicacion</Text>
          <ChevronDownIcon size={15} color={'black'} />
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
      {/* End of Header */}

      {/* Cards */}
      <View>
        <Swiper
          cards={DUMMY_DATA}
          renderCard={(card) => (
            <Cards
              img={card.image}
              description={card.descripction}
              sold={card.ticketsSold}
              max={card.ticketsMax}
              name={card.name}
              date={card.date}
            />
          )}
          stackSize={5}
          animateCardOpacity
          horizontalSwipe={false}
        ></Swiper>
      </View>
      {/* End of Cards */}
    </SafeAreaView>
  )
}

export default HomeScreen
