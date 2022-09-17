import React from 'react'
import { SafeAreaView, ScrollView } from 'react-native'
import Home from './src/screens/Home'
import SobreLoja from './src/screens/SobreLoja'

export default function App() {

    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#FAF9F9' }}>
        <ScrollView>
          <Home />
          <SobreLoja />
        </ScrollView>
      </SafeAreaView>
    )
}

