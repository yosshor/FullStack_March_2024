import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

const [count, setCount] = useState(1);


function handleCount(action: "increment" | "decrement"){
  if (action === "increment"){
    setCount(count + 1);
  } else {
    setCount(count - 1);
  }
}

  return (
    <View style={styles.container}>
      <Text>{count}</Text>
      <Button title="Increment" onPress={() => handleCount("increment")} />
      <Button title="Decrement" onPress={() => handleCount("decrement")} />
      <StatusBar style="auto" />
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
    padding: 20,
    gap: 20
  },
  text:{
    color: 'white'
  }, 
  input:{
    height: 40,
    borderColor: 'gray',
    backgroundColor: 'white',
    borderWidth: 1,
    width: 200
  }

});
