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
import { useSpotifyAuth } from "../utils";
import { SongList } from "./songlist";
import { Themes, Images } from "../assets/Themes";
import tracks from "../utils/albumTracksCache.json";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const AuthButton = ({ authFunction }) => {
  return (
    <Pressable onPress={authFunction}>
      <ImageBackground
        source={styles.spotifyBox}
        style={styles.spotifyBox}
        imageStyle={styles.spotifyBox}
      >
        <View style={styles.button}>
          <Image style={styles.logo} source={Images.spotify} />
          <Text style={{ fontSize: 15, color: "white", paddingLeft: 15 }}>
            CONNECT WITH SPOTIFY
          </Text>
        </View>
      </ImageBackground>
    </Pressable>
  );
};
const List = ({ tracks }) => {
  return (
    <View style={styles.container}>
      <SongList tracks={tracks} />
    </View>
  );
};

export function HomeScreen() {
  // Pass in true to useSpotifyAuth to use the album ID (in env.js) instead of top tracks
  // const { token, tracks, getSpotifyAuth } = useSpotifyAuth(true);
  const [token, setToken] = useState(false);

  let contentDisplayed;
  if (token) {
    contentDisplayed = <List tracks={tracks} />;
  } else {
    contentDisplayed = <AuthButton authFunction={() => setToken(true)} />;
  }

  return (
    <SafeAreaView style={styles.container}>{contentDisplayed}</SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Themes.colors.background,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  spotifyBox: {
    backgroundColor: Themes.colors.spotify,
    width: windowWidth * 0.65,
    height: windowHeight * 0.06,
    borderRadius: 100,
    justifyContent: "center",
    flexDirection: "row",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
  },
  list: {
    backgroundColor: Themes.colors.background,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: windowWidth * 0.09,
    height: windowWidth * 0.09,
  },
});
