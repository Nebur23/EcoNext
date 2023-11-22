import React from 'react'
import { View, Text, Image,TouchableOpacity  } from 'react-native'

import styles from './screenheader.style'


const ScreenHeaderBtn = ( { iconsUrl, dimension}) => {
  return (
    <TouchableOpacity style={styles.btnContainer}  onPress={() => {}}>
        <Image  
          source={iconsUrl}
          resizeMode='cover'
          style={styles.btnImg(dimension)}
         />
    </TouchableOpacity>
  )
}

export default ScreenHeaderBtn