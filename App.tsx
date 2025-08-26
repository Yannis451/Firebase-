import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigationScreen from './src/Component/StackNavigation';

export default function App() {
  return(
    <StackNavigationScreen/>
  )
}