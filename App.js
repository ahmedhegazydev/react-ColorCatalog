import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text, View, Image, 
  Alert, Button,
  Platform, Dimensions
} from 'react-native';
import { ActivityIndicator } from 'react-native';
import { ProgressViewIOS } from 'react-native';
import { ProgressView } from "@react-native-community/progress-view";
import { ProgressBarAndroid } from 'react-native'

import imgIcon from "./assets/icon.png"
import imgSplash from "./assets/splash.png"


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
        <ProgressBarAndroid
          styleAttr="Horizontal"
          indeterminate={false}
          progress={0.8}
        />
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


      <Text style={styles.platform}>Platform: {Platform.OS}</Text>

      <Image style={styles.image} source={imgIcon} />
      <Image style={styles.image} source={imgSplash} />

    </View>
  );
}


const styles = StyleSheet.create({
  container: {

    flex: 1,

    flexDirection: "column",
    // flexDirection: "row", 

    backgroundColor: '#fff',


    // alignItems: "flex-start",
    // alignItems: "flex-end",
    alignItems: "center",


    justifyContent: "center",
    // justifyContent: "space-between",


  },

  ready: {
    fontSize: 30,
  },

  platform: {
    // flex: 1,
    // alignSelf: "flex-end",
  },

  progress: {
    width: 200,
  },

  image: {
    flex: 1,
    borderRadius: 20, 
    width: 200, 
    backgroundColor: "red", 
    
  }

});
