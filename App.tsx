import {SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import FlatCards from './components/FlatCards/FlatCards';
import ElevatedCards from './components/ElevatedCards/ElevatedCards';
import FancyCard from './components/FancyCard/FancyCard';

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
      </ScrollView>
      <ElevatedCards />
      <FancyCard />
    </SafeAreaView>
  );
}
