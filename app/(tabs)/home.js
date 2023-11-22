import { StyleSheet, Text, View, SafeAreaView,ScrollView, TouchableOpacity, Image, FlatList  } from 'react-native'
import { Stack , useRouter } from "expo-router"
import React, { useState } from 'react'
import ScreenHeaderBtn from "../../components/common/header/ScreenHeaderBtn"
import { COLORS, SIZES } from '../../constants/theme'
import { icons, images } from '../../constants'
import Welcome from '../../components/welcome'
import Categories from '../../components/categories'
import{ initiatives} from "../../data/initiative.json"

import img from "../../assets/images/plastic-free.jpeg"
import Card from '../../components/common/card/card'

const Home = () => {
    const router = useRouter()
    const { title, description,steps } =  initiatives[0]
    const [filteredData, setFilteredData] = useState(initiatives);

    const handleCardPress = () => {
      // Add your logic for handling card press here
      console.log('Card pressed!');
    };
  return (
    <SafeAreaView style={{backgroundColor: COLORS.lightWhite, flex: 1}} >
       <Stack.Screen 
        options={{
            headerStyle: {backgroundColor: COLORS.lightWhite},
            headerShadowVisible: false ,
            headerLeft: () => (
                <Text style={{fontWeight:"bold"}}></Text> 
            ),
            headerRight: () => (
              <ScreenHeaderBtn iconsUrl={images.profile} dimension="100%" />
          ),
          title: "",
          
        }}
       />

       {/* body of homepage */}

       <ScrollView showsVerticalScrollIndicator={false} >
          <View style={{flex: 1, padding: SIZES.medium}}>
             <Welcome  />
             <Categories />
            
          
          <Text>hello</Text>
          <FlatList
        data={filteredData}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <View style={styles.item}>
              
              {/* <Card
              title={item.title}
              imageSource={ img }
              onPress={handleCardPress}
            /> */}
            <Text>{item.title} </Text>
          </View>
        ) }
      />
          </View>
       </ScrollView>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  item: {
    backgroundColor:"red",
    
  }
})