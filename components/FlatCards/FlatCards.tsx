import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.headingText}>FlatCards</Text>
      <View style={[styles.redContainer, styles.red]}>
        <Text style={styles.text}>Red</Text>
      </View>
      <View style={[styles.redContainer, styles.green]}>
        <Text style={styles.text}>Green</Text>
      </View>
      <View style={[styles.redContainer, styles.blue]}>
        <Text style={styles.text}>Blue</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    textAlign: 'center',
  },
  redContainer: {
    height: 100,
    width: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    margin: 8,
  },
  red: {
    backgroundColor: 'red',
  },
  green: {
    backgroundColor: 'green',
  },
  blue: {
    backgroundColor: 'blue',
  },
  text: {
    color: 'white',
  },
});
