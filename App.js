import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import Header from './src/components/cartComponents/Header'
import Product from './src/components/cartComponents/Product'

const App = () => {
  const products=[
    {
      name:"Samsung mobile",
      color: "blue",
      price:10000,
      image: "https://www.shutterstock.com/image-vector/3d-high-quality-vector-mobile-260nw-2121419597.jpg"
    },
    {
      name:"Appe mobile",
      color: "pink",
      price:100000,
      image: "https://www.shutterstock.com/image-vector/3d-high-quality-vector-mobile-260nw-2121419597.jpg"

    },
    {
      name:"Redmi mobile",
      color: "black",
      price:5000,
      image: "https://www.shutterstock.com/image-vector/3d-high-quality-vector-mobile-260nw-2121419597.jpg"

    },

  ]
  return (
    <View>
      <Text>App</Text>
      <Header />
      <ScrollView>

      {
        products.map((item)=><Product item={item} />)
      }
      </ScrollView>
      
    </View>
  )
}

export default App