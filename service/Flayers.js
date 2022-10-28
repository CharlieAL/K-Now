const flayers = [
  {
    id: 1,
    name: 'Fiesta de Bad Bunny',
    description: 'Fiesta de Bad Bunny en el estadio de los Angeles',
    image:
      'https://i.pinimg.com/736x/3f/ca/de/3fcadeab5b29019cdb96fc389ee618ee.jpg',
    location: 'Los Angeles, CA',
    date: '2021-05-01',
    time: '20:00',
    price: 100,
    tickets: 100,
    long: -118.2437,
    lat: 34.0522,
    user: {
      id: 1,
      name: 'Bad Bunny'
    }
  },
  {
    id: 2,
    name: 'Fiesta de Bad Bunny',
    description: 'Fiesta de Bad Bunny en el estadio de los Angeles',
    image:
      'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/night-club-party-flyer-template-design-9b4a7f8e181f83ba00e22ff72ad60866_screen.jpg?ts=1636989248',
    location: 'Los Angeles, CA',
    date: '2021-05-01',
    time: '20:00',
    price: 100,
    tickets: 100,
    long: -118.2437,
    lat: 34.0522,
    user: {
      id: 1,
      name: 'Bad Bunny'
    }
  }
]

const getFlayers = async () => {
  const a = JSON.stringify(flayers)

  JSON.parse(a)
  console.log('adasd', a)
}

exports = module.exports = {
  getFlayers
}
