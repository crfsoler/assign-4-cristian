import {
    Text,
    View,
    SafeAreaView,
    StyleSheet,
    Image,
    Dimensions,
    FlatList,
    ImageBackground,
    Pressable,
    TextInput
  } from "react-native";
  import Constants from "expo-constants";
  import { useState, useEffect } from "react";
  import { Themes, Images } from "../assets/Themes";
  import { NavigationContainer, useNavigation } from "@react-navigation/native";
  import {supabase} from "../supabase";
  
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;

      const channel = supabase.channel('room1', {  
        config: {
          presence: {
            key: 'Cristian',
            // isHost: true,
          },
        },
      })

  export function WaitingRoom() {
    const [guests, setGuests] = useState({})

    useEffect(() => {
      channel
        .on('presence', { event: '*', schema: '*' }, payload => {
          setGuests(channel.presenceState())
          console.log('Change received!', channel.presenceState())
      })
      .subscribe()

    }, [])

    const RenderGuest = (item) => {
      console.log('item', item)
      // console.log("preview", item.preview_url);
      // console.log("external", item.external_urls);

      return (
        <Text style={{ fontSize: 15 }}>{item}</Text>
      );
    };

 
    return (
      <View style={styles.container}>
        <View style={styles.titleRow}>
          <Image style={styles.logo} source={Images.telephone} />
          <Text style={styles.titleText}> Cristian's room</Text>
        </View>
        <FlatList
          data={Object.keys(guests)} // the array of data that the FlatList displays
          renderItem={({item}) => RenderGuest(item)} // function that renders each item
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
      justifyContent: "center",
    },
    titleText: {
      fontSize: 25,
      fontWeight: "bold",
      paddingLeft: 15,
      color: "black",
    },
    logo: {
      width: windowWidth * 0.18,
      height: windowWidth * 0.106,
    },
     buttonBox: {
      backgroundColor: Themes.colors.spotify,
      width: windowWidth * 0.4,
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