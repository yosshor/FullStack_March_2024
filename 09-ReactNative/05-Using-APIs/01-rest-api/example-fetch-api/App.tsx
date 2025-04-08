import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import StudentsList from './view/studentsList/StudentsList';


export default function App() {

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("http://10.0.2.2:3000/data")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
     console.log(data);
        setStudents(data);
        setError(false);
        setErrorMessage("");
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
        setError(true);
        setErrorMessage(error.message);
      }).finally(() => {
        setLoading(false);
      });    

  },[]);

  // if(error) return (
  //   <View style={styles.container}>
  //     <Text>Error: {errorMessage}</Text>
  //   </View>
  // )

  return (
    <View style={styles.container}>
      <StudentsList students={students} />
      <Text>Students List</Text>
      <StatusBar style="auto" />
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
