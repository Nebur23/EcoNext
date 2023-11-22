import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { COLORS, SIZES } from '../constants'

const Categories = () => {
    const jobTypes = ["All", "Popular", "Recommended", "Newest"]
    const [activeJobType, setActiveJobType] = useState("All")
  return (
    <View style={styles.tabsContainer} >
    <FlatList 
      data={jobTypes}
      renderItem={({item}) => (
          <TouchableOpacity style={styles.tab(activeJobType, item)}
            onPress={ () => {
              setActiveJobType(item)
              //router.push(`/search/${item}`)
            }}
          >
            <Text style={styles.tabText(activeJobType, item)} >{item}</Text>
          </TouchableOpacity>
      )}  

      keyExtractor={item => item }
      horizontal
      contentContainerStyle={{ columnGap: SIZES.small}}
    />
  </View>
  )
}

export default Categories

const styles = StyleSheet.create({
    tabsContainer: {
        width: "100%",
        marginTop: SIZES.medium,
      },
      tab: (activeJobType, item) => ({
        paddingVertical: SIZES.small / 2,
        paddingHorizontal: SIZES.small,
        borderRadius: SIZES.medium,
        borderWidth: 1,
        borderColor: activeJobType === item ? COLORS.secondary : COLORS.gray2,
      }),
      tabText: (activeJobType, item) => ({
        color: activeJobType === item ? COLORS.secondary : COLORS.gray2,
      }),
})