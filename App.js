import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text, View
  ,
  Button
} from 'react-native';
import { ActivityIndicator } from 'react-native';
import { ProgressViewIOS } from 'react-native';
import { ProgressView } from "@react-native-community/progress-view";
// import {ProgressBarAndroid} from 'react-native'



export default function App() {


  console.log("");
  const onBtnClickMePressed = () => {
   console.log ("on button clicking");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.ready}>Ready....</Text>
      {/* <StatusBar style="auto" /> */}


      {/* <ProgressViewIOS
        style={styles.progress}
        progressTintColor=""
        progress={0.5}
      /> */}



      <ActivityIndicator size="large" color="#334455" />

      {/* <ProgressView
        progressTintColor="orange"
        trackTintColor="blue"
        progress={0.7}
      /> */}


      <Button
        title="CLick Me"
        onPress={onBtnClickMePressed}
      />



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
  },

  progress: {
    width: 200,
  },


});
