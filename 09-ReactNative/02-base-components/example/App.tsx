import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [text, setText] = useState('');


  return (
    <View style={styles.container}>

      <Text style={styles.text}>{text}</Text>
      <StatusBar style="auto" />
      <TextInput style={styles.input} 
        placeholder="Enter your text"
        onChangeText={setText}
        value={text}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  text:{
    backgroundColor: 'teal'
  }, 
  input:{
    height: 40,
    borderColor: 'gray',
    backgroundColor: 'white',
    borderWidth: 1,
    width: 200
  }

});
