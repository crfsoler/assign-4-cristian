import {
    Text,
    View,
    SafeAreaView,
    StyleSheet,
    Image,
    Dimensions,
    FlatList,
    StyleSheet,
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

  export function GuestList({ guests }) {
    const RenderGuest = ({ item }) => {
      // console.log("preview", item.preview_url);
      // console.log("external", item.external_urls);

      return (
        <SongTrack
          name={item.name}
          image={item.guest.image}
        />
      );
    };
  
    return (
      <View style={styles.container}>
        <View style={styles.titleRow}>
          <Image style={styles.logo} source={Images.telephone} />
          <Text style={styles.titleText}>Guest List</Text>
        </View>
        <FlatList
          data={tracks} // the array of data that the FlatList displays
          renderItem={(tracks) => RenderGuest(tracks)} // function that renders each item
          keyExtractor={(track, index) => index} // unique key for each item
        />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      paddingTop: Constants.statusBarHeight,
      backgroundColor: Themes.colors.white,
      padding: 10,
    },
    titleRow: {
      flexDirection: "row",
      padding: 20,
      // backgroundColor: Themes.colors.background,
      justifyContent: "center",
    },
    titleText: {
      fontSize: 20,
      fontWeight: "bold",
      paddingLeft: 15,
      color: "white",
    },
    logo: {
      width: windowWidth * 0.09,
      height: windowWidth * 0.053,
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