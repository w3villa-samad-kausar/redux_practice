import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Product = ({item }) => {
  return (<View style={{alignItems:"center"}}>
    <Text style={{fontSize:30}}>{item.name}</Text>
    <Text style={{fontSize:30}}>{item.color}</Text>
    <Text style={{fontSize:30}}>{item.price}</Text>
    <Image source={{uri:item.image}} style={{width:200,height:200}}/>
    <TouchableOpacity style={{backgroundColor:"black",width:100}}><Text style={{color:"white",}}>Add to cart</Text></TouchableOpacity>
  </View>
  )
}

export default Product

const styles = StyleSheet.create({})