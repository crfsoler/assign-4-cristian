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

  export function RoomCode() {

    // const [hostName, setHostName] = useState("")

    const enterRoom = () => {
      console.log('entering room')
      const channel = supabase.channel('room1', {
        config: {
          presence: {
            key: 'user2',
          },
        },
      })
      
      // Presence event handlers setup
      
      channel.subscribe(async (status) => {
        if (status === 'SUBSCRIBED') {
          const status = await channel.track({ online_at: new Date().toISOString() })
          console.log(status)
        }
      })
    }

    const NextButton = ({  }) => {
      return (
        <Pressable onPress={enterRoom}>
        <View style={{ alignItems: "center", paddingTop: windowHeight * 0.05, flex: 1 }}>
          <ImageBackground
            source={styles.buttonBox}
            style={styles.buttonBox}
            imageStyle={styles.buttonBox}
          >
            <View style={styles.button}>
              <Text style={{ fontSize: 20, color: "white" }}>
                Next
              </Text>
            </View>
          </ImageBackground>
        </View>
        </Pressable>
      );
    };
    
    return (
      <View style={{ alignItems: "center", paddingTop: windowHeight * 0.1, flex: 1 }}>
          <Image style={styles.logo} source={Images.telephone} />
          <Text style={{ fontSize: 17, color: "black", alignItems: "center", paddingTop: 20 }}>
            Enter code
          </Text>
          <TextInput
            style={styles.textinput}
            // onChangeText={setName}
            // value={hostname}
            placeholder="Room code"
          />
        <View>
          <NextButton/>
        </View>
      </View>
    );
}


// export function HomeScreen() {
//   // Pass in true to useSpotifyAuth to use the album ID (in env.js) instead of top tracks
//   // const { token, tracks, getSpotifyAuth } = useSpotifyAuth(true);
//   const [token, setToken] = useState(false);

//   let contentDisplayed;
//   if (token) {
//     contentDisplayed = <List tracks={tracks} />;
//   } else {
//     contentDisplayed = <HostButton authFunction={() => setToken(true)} />;
//   }

//   return (
//     <SafeAreaView style={styles.container}>{contentDisplayed}</SafeAreaView>
//   );
// }

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