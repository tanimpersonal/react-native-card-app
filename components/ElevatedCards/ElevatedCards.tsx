import {View, Text, SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import React from 'react';

export default function ElevatedCards() {
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.headingText}>Elevated Cards</Text>
        <ScrollView horizontal style={styles.container}>
          <View style={[styles.redContainer, styles.red]}>
            <Text style={styles.text}>Red</Text>
          </View>
          <View style={[styles.redContainer, styles.green]}>
            <Text style={styles.text}>Green</Text>
          </View>
          <View style={[styles.redContainer, styles.blue]}>
            <Text style={styles.text}>Blue</Text>
          </View>
          <View style={[styles.redContainer, styles.beige]}>
            <Text style={styles.text}>Yellow</Text>
          </View>
          <View style={[styles.redContainer, styles.tomato]}>
            <Text style={styles.text}>Violate</Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  headingText: {
    textAlign: 'center',
  },
  container: {
    overflow: 'hidden',
  },
  redContainer: {
    height: 100,
    width: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    margin: 8,
    // elevation: 100,
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
  beige: {
    backgroundColor: 'yellow',
  },
  tomato: {
    backgroundColor: 'tomato',
  },
  text: {
    color: 'white',
  },
});
