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

  export function HostName() {
    const [hostName, setHostName] = useState("")

    const createRoom = () => {
      console.log('creating room')
      const channel = supabase.channel('room1', {  
        config: {
          presence: {
            key: hostName,
          },
        },
      })

      channel.on('presence', { event: 'sync' }, () => {
        console.log('Online users: ', channel.presenceState())
      })

      channel.subscribe(async (status) => {
        if (status === 'SUBSCRIBED') {
          const status = await channel.track({ online_at: new Date().toISOString() })
          console.log(status)
        }
      })

      // navigation.navigate(share link screen)

    }

    const NextButton = ({  }) => {
      const navigation = useNavigation();
      return (
        <Pressable onPress={createRoom} >
          {/* onPress={() => {
      navigation.navigate("Guest list", {   });
    }} */}
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
            Your name
          </Text>
          <TextInput
            style={styles.textinput}
            onChangeText={setHostName}
            value={hostName}
            placeholder="Host name"
          />
        <View>
          <NextButton />
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