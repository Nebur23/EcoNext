import { StyleSheet, Text, View,TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { COLORS, SIZES } from '../constants'
import { AntDesign } from '@expo/vector-icons';


const welcome = () => {
    const [searchText, setSearchText] = useState('');

    const handleSearch = () => {
      // Pass the search text to the parent component
      onSearch(searchText);
    };
  return (

 <View>
       <View style={styles.containerMain}>
                <Text style={styles.userName}>Hello Ruben  </Text>
            <Text style={styles.action}>Find the best initiative for you </Text>
        </View>
        <View style={styles.container}>
            <View style={styles.searchWrapper}>
            <TextInput
        style={styles.input}
        placeholder="Search..."
        placeholderTextColor="#a9a9a9" 
        value={searchText}
        onChangeText={setSearchText}
        onSubmitEditing={handleSearch}
      />
            <TouchableOpacity onPress={() => {}} >
                    <AntDesign name="search1" size={24} color="black" />
            </TouchableOpacity>
            </View>
    </View>

        
 </View>
  )
}

export default welcome

const styles = StyleSheet.create({
    containerMain: {
        flex: 1
    },
    userName: {
        fontSize: SIZES.medium,
        color: COLORS.gray
    },
    action: {
       fontSize: SIZES.xLarge,
       fontWeight:  'bold',
    },
    container: {
        padding: 10,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
       
      },
      searchWrapper:{
        flexDirection:"row",
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
        marginRight: 'auto',
        flex: 1,
        borderRadius: 20,
        alignItems: "center"
      },
      input: {
        paddingHorizontal: 10,
        marginRight: 'auto',
        flex: 1,
        
      },
})


