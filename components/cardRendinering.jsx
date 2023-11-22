import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CardRendinering = ({ filteredData }) => {
  return (
    <View>
           
           <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => null}
      />
    </View>
  )
}

export default CardRendinering

const styles = StyleSheet.create({})