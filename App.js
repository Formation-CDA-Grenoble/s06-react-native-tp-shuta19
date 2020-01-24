import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { PersonList } from './components';





export default function App() {
  
  
  return (
    
    <View style={styles.container}>
      <Text>Ok</Text>
      <PersonList/>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
