import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Image,
  Dimensions,
  ImageBackground,
  Pressable,
} from "react-native";
import Constants from "expo-constants";
import { useState } from "react";
import { Themes, Images } from "../assets/Themes";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export function HomeScreen() {

const HostButton = ({ }) => {
  const navigation = useNavigation();
  return (
    <Pressable onPress={() => {
      navigation.navigate("Host name", {   });
    }}>
      <ImageBackground
        source={styles.buttonBox}
        style={styles.buttonBox}
        imageStyle={styles.buttonBox}
      >
        <View style={styles.button}>
          <Text style={{ fontSize: 20, color: "white" }}>
            Host
          </Text>
        </View>
      </ImageBackground>
    </Pressable>
  );
};

const GuestButton = ({  }) => {
  const navigation = useNavigation();
  return (
    <Pressable style={{marginTop: 16}} onPress={() => {
      navigation.navigate("Guest room", {    });
    }}>
      <ImageBackground
        source={styles.buttonBox}
        style={styles.buttonBox}
        imageStyle={styles.buttonBox}
      >
        <View style={styles.button}>
          <Text style={{ fontSize: 20, color: "white" }}>
            Guest
          </Text>
        </View>
      </ImageBackground>
    </Pressable>
  );
};
return (
  <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
    <Image style={styles.logo} source={Images.telephone} />
    <View style={{marginTop: 48}}>
    <HostButton />
    <GuestButton />
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
  list: {
    backgroundColor: Themes.colors.background,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: windowWidth * 0.9,
    height: windowWidth * 0.53,
  },
});
