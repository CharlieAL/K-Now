import { View, Text, StatusBar, Dimensions, StyleSheet } from 'react-native'

import Cards from '../components/Cards'
import Navbar from '../components/Navbar'

import useAuth from '../hooks/useAuth'
import { FlashList } from '@shopify/flash-list'
import Header from '../components/Header'

const DUMMY_DATA = [
  {
    id: 1,
    name: 'Roberto Perez',
    nameOfEvent: 'Fiesta de la cerveza',
    image:
      'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/hip-hop-rap-music-event-flyer-template-design-3b828da63aad5f3e4b3388af9d6c9b9c_screen.jpg?ts=1636985494',
    ticketsMax: 400,
    ticketsSold: 73,
    descripction:
      '1 Batallas de Rap en vivo en el centro de la ciudad de Mexico mejor evento de rap en vivo',
    date: '2022-11-11',
    hour: '22:00',
    location: 'Mexico'
  },
  {
    id: 2,
    name: 'Charlie Martinez',
    nameOfEvent: 'Fiesta de la cerveza',
    image:
      'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/techno-party-flyer-template-design-98b3f955ea7ac8622799eee7f6bb5adc_screen.jpg?ts=1636993025',
    ticketsMax: 100,
    ticketsSold: 45,
    descripction:
      '2 La mejor tecno banda en vivo aparten lugar rapido porque se agotan los boletos',
    date: '2022-11-20',
    hour: '22:00',
    location: 'Mexico'
  },
  {
    id: 3,
    name: 'Roberto Perez',
    nameOfEvent: 'Fiesta de la cerveza',
    image:
      'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/hip-hop-rap-music-event-flyer-template-design-3b828da63aad5f3e4b3388af9d6c9b9c_screen.jpg?ts=1636985494',
    ticketsMax: 100,
    ticketsSold: 50,
    descripction:
      '3 Batallas de Rap en vivo en el centro de la ciudad de Mexico mejor evento de rap en vivo',
    date: '2022-11-11',
    hour: '22:00',
    location: 'Mexico'
  },
  {
    id: 4,
    name: 'Charlie Martinez',
    nameOfEvent: 'Fiesta de la cerveza',
    image:
      'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/techno-party-flyer-template-design-98b3f955ea7ac8622799eee7f6bb5adc_screen.jpg?ts=1636993025',
    ticketsMax: 100,
    ticketsSold: 45,
    descripction:
      '4 La mejor tecno banda en vivo aparten lugar rapido porque se agotan los boletos',
    date: '2022-11-20',
    hour: '22:00',
    location: 'Mexico'
  },
  {
    id: 5,
    name: 'Roberto Perez',
    nameOfEvent: 'Fiesta de la cerveza',
    image:
      'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/hip-hop-rap-music-event-flyer-template-design-3b828da63aad5f3e4b3388af9d6c9b9c_screen.jpg?ts=1636985494',
    ticketsMax: 100,
    ticketsSold: 50,
    descripction:
      '5 Batallas de Rap en vivo en el centro de la ciudad de Mexico mejor evento de rap en vivo',
    date: '2022-11-11',
    hour: '22:00',
    location: 'Mexico'
  },
  {
    id: 6,
    name: 'Charlie Martinez',
    nameOfEvent: 'Fiesta de la cerveza',
    image:
      'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/techno-party-flyer-template-design-98b3f955ea7ac8622799eee7f6bb5adc_screen.jpg?ts=1636993025',
    ticketsMax: 100,
    ticketsSold: 45,
    descripction:
      '6 La mejor tecno banda en vivo aparten lugar rapido porque se agotan los boletos',
    date: '2022-11-20',
    hour: '22:00',
    location: 'Mexico'
  },
  {
    id: 7,
    name: 'Roberto Perez',
    nameOfEvent: 'Fiesta de la cerveza',
    image:
      'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/hip-hop-rap-music-event-flyer-template-design-3b828da63aad5f3e4b3388af9d6c9b9c_screen.jpg?ts=1636985494',
    ticketsMax: 100,
    ticketsSold: 50,
    descripction:
      '7 Batallas de Rap en vivo en el centro de la ciudad de Mexico mejor evento de rap en vivo aksldnlakdnk alsdnlasndlka lkadnlansd',
    date: '2022-11-11',
    hour: '22:00',
    location: 'Mexico'
  }
]

const HomeScreen = () => {
  const { user } = useAuth()
  return (
    <>
      <Header />
      <View className='flex-1 bg-black'>
        {/* header */}
        {/* end header */}
        {/* Cards */}
        <View style={styles.cardContainer}>
          <FlashList
            data={DUMMY_DATA}
            estimatedItemSize={200}
            contentContainerStyle={{}}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <Cards
                key={item.id}
                img={item.image}
                description={item.descripction}
                sold={item.ticketsSold}
                max={item.ticketsMax}
                name={item.name}
                nameOfEvent={item.nameOfEvent}
                date={item.date}
                hour={item.hour}
              />
            )}
          />
        </View>
        {/* End of Cards */}
      </View>
      {/* NavBottom */}
      <Navbar user={user} />
      {/* End of NavBottom */}
    </>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  cardContainer: {
    height: Dimensions.get('window').height - 160
  }
})
