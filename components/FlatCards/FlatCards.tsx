import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FlatCards() {
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.headingText}>FlatCards</Text>
        <View style={styles.container}>
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
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headingText: {
    textAlign: 'center',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
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
