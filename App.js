import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {ActivityIndicator} from 'react-native';



export default function App() {


  console.log
  return (
    <View style={styles.container}>
      <Text style={styles.ready}>Ready....</Text>
      {/* <StatusBar style="auto" /> */}
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

  ready: {
    fontSize: 30,
  }




});
