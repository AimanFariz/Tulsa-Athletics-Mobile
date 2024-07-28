import React from 'react'
import { View, Text, ScrollView} from 'react-native'
import ShopHeader from '../components/Headers/ShopHeader'

export default function Shop() {
  return (
    <>
      <ShopHeader/>
      <ScrollView>
        <Text>Shop</Text>
      </ScrollView>
    </>
  )
}
