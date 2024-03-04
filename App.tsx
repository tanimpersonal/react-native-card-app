import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import FlatCards from './components/FlatCards/FlatCards';

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards></FlatCards>
      </ScrollView>
    </SafeAreaView>
  );
}
