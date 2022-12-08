import {
    Text,
    View,
    SafeAreaView,
    StyleSheet,
    Image,
    Dimensions,
    ImageBackground,
    Pressable,
    TextInput
  } from "react-native";
  import Constants from "expo-constants";
  import { useState } from "react";
  import { Themes, Images } from "../assets/Themes";
  import { NavigationContainer, useNavigation } from "@react-navigation/native";
  import {supabase} from "../supabase"
  
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;

  export function MessageScreen() {

    const GameButton = ({  }) => {
      const navigation = useNavigation();
      return (
        // <Pressable onPress={} >
          <View style={{ alignItems: "center", paddingTop: windowHeight * 0.05, flex: 1 }}>
            <ImageBackground
              source={styles.buttonBox}
              style={styles.buttonBox}
              imageStyle={styles.buttonBox}
            >
              <View style={styles.button}>
                <Text style={{ fontSize: 20, color: "white" }}>
                  Start Game
                </Text>
              </View>
            </ImageBackground>
          </View>
        // </Pressable>
      );
    };
    
    return (
      <View style={{ alignItems: "center", paddingTop: windowHeight * 0.1, flex: 1 }}>
          <Image style={styles.logo} source={Images.telephone} />
          <Text style={{ fontSize: 17, color: "black", alignItems: "center", paddingTop: 20 }}>
            Type message
          </Text>
          <TextInput
            style={styles.textinput}
            // onChangeText={setHostName}
            // value={hostName}
            placeholder="Message"
          />
          <Text style={{ fontSize: 12, color: "black", alignItems: "center", paddingTop: 20 }}>
            Add a dot (.) whenever you want to break the message into a different group.
          </Text>
        <View>
          <GameButton />
        </View>
      </View>
    );
}


const styles = StyleSheet.create({
    container: {
      backgroundColor: Themes.colors.white,
      justifyContent: "center",
      alignItems: "center",
      flex: 1,
    },
    logo: {
      width: windowWidth * 0.9,
      height: windowWidth * 0.53,
    },
    buttonBox: {
      backgroundColor: Themes.colors.spotify,
      width: windowWidth * 0.3,
      height: windowHeight * 0.04,
      borderRadius: 100,
      justifyContent: "center",
      flexDirection: "row",
    },
    button: {
      alignItems: "center",
    },
    textinput: {
      borderWidth: 1,
      margin: 25,
      width: 200,
      padding:7,
    },
});