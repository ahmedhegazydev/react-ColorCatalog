import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text, View,
  Alert, Button,
  Platform, Dimensions
} from 'react-native';
import { ActivityIndicator } from 'react-native';
import { ProgressViewIOS } from 'react-native';
import { ProgressView } from "@react-native-community/progress-view";
import { ProgressBarAndroid } from 'react-native'



export default function App() {


  console.log("");
  const { width, height } = Dimensions.get("window");
  const onBtnClickMePressed = () => {
    console.log(`${new Date().toLocaleDateString()} on button clicking`);
    Alert.alert(`${new Date().toLocaleTimeString} when clicked on btn click me`);

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

      {/* <ActivityIndicator size="large" color="#334455" /> */}

      {Platform.OS === "ios" &&
        <ProgressViewIOS
          style={styles.progress}
          progressTintColor=""
          progress={0.5}
        />
      }

      {Platform.OS === "android" &&
        <ActivityIndicator size="large" color="#334455" />
      }

      {/* <ProgressView
        progressTintColor="orange"
        trackTintColor="blue"
        progress={0.7}
      /> */}


      <Button
        title="CLick Me"
        onPress={onBtnClickMePressed}
      />

      <Text>Width: {width}</Text>
      <Text style={{ paddingBottom: 20, }}>Height: {height}</Text>


      <Text>Platform: {Platform.OS}</Text>



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
