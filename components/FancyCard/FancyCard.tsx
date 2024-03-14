import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import fortImage from '../../assets/fort.jpg';
export default function FancyCard() {
  return (
    <View>
      <Text style={styles.fancyCard}>FancyCard</Text>
      <View style={styles.card}>
        <View style={styles.cardImageContainer}>
          <Image style={styles.cardImage} source={fortImage} />
        </View>
        <View style={styles.cardTextsContainer}>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, minus.
          </Text>
          <Text>Lorem ipsum dolor sit amet.</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  fancyCard: {
    color: 'gray',
    // textAlign: 'left',
    marginHorizontal: 10,
    fontSize: 24,
    fontWeight: '500',
  },
  cardImage: {
    height: 200,
    width: 'screen',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginBottom: 10,
  },
  cardImageContainer: {},
  cardTextsContainer: {},
  card: {
    backgroundColor: 'gray',
    height: 350,
    margin: 10,
    borderRadius: 10,
    elevation: 3,
    shadowOffset: {
      width: 500,
      height: 500,
    },
  },
});
