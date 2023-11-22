// Card.js

import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const Card = ({ title, imageSource, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.card}>
        <Image source={imageSource} style={styles.image} />
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: 'center', // Center content horizontally,
    marginTop: 30
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  image: {
    width: "100%",
    height: "80%",
    borderRadius: 5, // Make the image circular
    marginBottom: 10,
  },
});

export default Card;
