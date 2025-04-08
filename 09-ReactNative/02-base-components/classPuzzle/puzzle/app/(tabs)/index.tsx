import { StyleSheet, Text, View } from 'react-native';
import { FlatList, GestureHandlerRootView } from 'react-native-gesture-handler';
import MainCard from '../components/mainCard/MainCard';
import { mockChats } from './IndexModel';


export default function HomeScreen() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.title}>Whatsapp</Text>
        <FlatList
          data={mockChats}
          renderItem={({ item }) => <MainCard message={item} />}
          keyExtractor={item => item.id}
        />
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  }
});